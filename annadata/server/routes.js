import express from "express";
import { register, login, logout, orderpickup, cancelpickup, updatepickup, updateProfile, updatePassword, getMyProfile } from "./utils/controllers.js";
import { isAuthenticated } from "./auth.js"

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/orderpickup").post(isAuthenticated, orderpickup);
router.route("/pickup/:pickupid").get(isAuthenticated, updatepickup).delete(isAuthenticated, cancelpickup);
router.route("/me").get(isAuthenticated, getMyProfile);
router.route("/updateprofile").put(isAuthenticated, updateProfile);
router.route("/updatepassword").put(isAuthenticated, updatePassword);

export default router
