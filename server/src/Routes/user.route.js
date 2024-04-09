import { Router } from "express";
import {
  RegisternewUser,
  getAlluser,
  logOut,
  loginuser,
} from "../controllers/User.controller.js";
import { isAdmin, verifyJwt } from "../Middelware/auth.middelware.js";

const router = Router();

router.route("/createuser").post(RegisternewUser);
router.route("/loginuser").post(loginuser);
router.route("/logout").post(verifyJwt, logOut);
router.route("/alluser").get(verifyJwt, isAdmin, getAlluser);

export default router;
