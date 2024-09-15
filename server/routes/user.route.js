import express from "express";
import isAuthorized from "../middlewares/isauthorized.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const userRoute= express.Router();

userRoute.get("/", getUsersForSidebar);

export default userRoute;
