import { Router } from "express";
import registerUser from "../controllers/user.js";

const router = Router();

// user registerUser
router.post("/register", registerUser);

export default router;
