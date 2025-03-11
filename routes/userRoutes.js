import { Router } from "express";
import { createUser } from "../Controller/UserController.js";
import { loginUser } from "../Controller/loginController.js";
import { createCheckin } from "../Controller/CheckinController.js";

const router = Router();

router.post("/createuser", createUser); // User registration
router.post("/login", loginUser); // User login
router.post("/check-in", createCheckin); // User login

export default router;
