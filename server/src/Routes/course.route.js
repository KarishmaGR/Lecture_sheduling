import { Router } from "express";
import { upload } from "../Middelware/multer.middleware.js";
import {
  getAllcourses,
  getSingleCourse,
  newCourse,
} from "../controllers/course.controller.js";
import { verifyJwt, isAdmin } from "../Middelware/auth.middelware.js";
const router = Router();

router.route("/createcourse").post(
  verifyJwt,
  isAdmin,
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  newCourse
);

router.route("/getallcourse").get(verifyJwt, getAllcourses);
router.route("/getsiglecourse/:courseId").get(verifyJwt, getSingleCourse);

export default router;
