import { Router } from "express";
import userRoutes from "../routes/userRoutes.js";

const router = Router();

router.use("/api", userRoutes); 

export default router;
