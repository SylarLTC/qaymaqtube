import express from "express";
import { signin, signup, googleAuth } from "../controllers/auth.js";

export const authRoutes = express.Router();

// Create a User
authRoutes.post("/signup", signup);
// Signin
authRoutes.post("/signin", signin);
// Google auth
authRoutes.post("/google", googleAuth);
