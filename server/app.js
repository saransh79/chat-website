import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app= express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["https://chat-website-glho.vercel.app", "https://chat-website-glho-git-main-saransh79s-projects.vercel.app"],
    credentials: true
}));

// routes
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

app.get("/", (req,res)=>{
    res.send("This is base route");
})


export default app;
