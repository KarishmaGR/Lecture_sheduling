import { Router } from "express";
import { verifyJwt } from "../Middelware/auth.middelware.js";
import { GetAllLectureAssignToInstruct } from "../controllers/instructore.controller.js";

const router = Router();

router.route("/getalllectures").get(verifyJwt, GetAllLectureAssignToInstruct);

export default router;
