import mongoose from "mongoose";
const DB_NAME = "Lecture";

const DBconnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDb Connected DB||Host ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error connecting to the database: ", error);
    process.exit(1);
  }
};

export default DBconnect;
