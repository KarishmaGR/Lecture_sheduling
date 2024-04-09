import { app } from "./app.js";
import DBconnect from "./DBconnect/Index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
DBconnect().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
