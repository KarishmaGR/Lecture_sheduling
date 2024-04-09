import { Router } from "express";
import { isAdmin, verifyJwt } from "../Middelware/auth.middelware.js";
import { createLecture } from "../controllers/leccture.controller.js";

const router = Router();

router
  .route("/createlecture/:course_id/:instructor_id")
  .post(verifyJwt, isAdmin, createLecture);

export default router;
