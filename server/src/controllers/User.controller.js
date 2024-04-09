import { User } from "../Models/User.Model.js";
import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiResponse } from "../Utils/ApiResponse.js";
import { ApiError } from "../Utils/ApiError.js";

// generate Refresh And Access token
const genetaterefreshaccesstoken = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new ApiError(401, "User not found");
    }

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false }); // skip validation on save
    return { refreshToken, accessToken };
  } catch (error) {
    console.log("Error while generting Tokens", error);
  }
};

// create new User

const RegisternewUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new ApiError(400, "Please provide all fields");
  }
  //check if user exist
  const existeduser = await User.findOne({ email: email });
  if (existeduser) {
    throw new ApiError(
      409,
      "User Already Exist with email! please try another ",
      ["User Exist"]
    );
  }
  //create and save user
  const createUser = await User.create({
    username,
    email,
    password,
  });
  const createdUser = await User.findById(createUser._id).select(
    "-password -refreshToken"
  );

  if (!createUser) {
    throw new ApiError(500, "Server Error While creating new User");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "User Created Successfully", createdUser));
});

// Login
const loginuser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //validate
  if (!email || !password) {
    throw new ApiError(409, "Please Provide Required Fields");
  }

  //Check for user exists or not
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordMatch = await user.isPasswordCorrect(password);

  if (!isPasswordMatch) {
    throw new ApiError(401, "Invalid Credentials");
  }

  const { refreshToken, accessToken } = await genetaterefreshaccesstoken(
    user._id
  );

  const loggedInuser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  //Store the tokens cookie

  const option = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("refreshToke", refreshToken, option)
    .cookie("accessToken", accessToken, option)
    .json(
      new ApiResponse(200, "User LoggedIn successfully", {
        user: loggedInuser,
        accessToken,
        refreshToken,
      })
    );
});

// logout
const logOut = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    { $unset: { refreshToken: 1 } },
    { new: true }
  );

  const option = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", option)
    .clearCookie("refreshToken", option)
    .json(new ApiResponse(200, "User Logged Out SuccessFully", {}));
});

// get all user
const getAlluser = asyncHandler(async (req, res) => {
  const allusers = await User.find();
  return res
    .status(200)
    .json(new ApiResponse(200, "All User fetched Successfully", allusers));
});
export { RegisternewUser, loginuser, logOut, getAlluser };
