import { app } from "./app.js";
import DBconnect from "./DBconnect/Index.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config({
  path: "./.env",
});

DBconnect().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
