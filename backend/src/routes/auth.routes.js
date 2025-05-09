import express from "express";
import { register, login, logout, check } from "../controllers/auth.controller.js";


const authRoutes = express.Router();

authRoutes.post("/register");

authRoutes.post("/login");

authRoutes.post("/logout");

authRoutes.post("/check");

export default authRoutes;