import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const CLOUDINARY_FOLDER = "videohosting";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadonCloudinary = async (localfilepath) => {
  try {
    if (!localfilepath) return null;
    const response = await cloudinary.uploader.upload(localfilepath, {
      folder: CLOUDINARY_FOLDER,
      resource_type: "auto",
    });

    fs.unlinkSync(localfilepath);
    return response;
  } catch (error) {
    console.log(`Error While Uploading File on cloudinary`);
    fs.unlinkSync(localfilepath);
    return null;
  }
};

export { uploadonCloudinary };
