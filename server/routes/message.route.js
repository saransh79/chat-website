import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import isAuthorized from "../middlewares/isauthorized.js";

const messageRoute = express.Router();

messageRoute.post("/send/:id", isAuthorized, sendMessage);
messageRoute.get("/:id", isAuthorized, getMessages);

export default messageRoute;