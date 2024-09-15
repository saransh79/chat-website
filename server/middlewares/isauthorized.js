import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const isAuthorized = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        
        if(!token){
            return res.status(400).json({
                message: "Unauthorized access."
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded) {
            return res.status(400).json({
                message: "Unauthorized token!"
            })
        }

        const user = await User.findById(decoded.userId);

        if(!user){
            return res.status(400).json({
                message: "User not found!"
            })
        }

        req.user= user;
        next();
    }
    catch (error) {
        console.log("error in middleware", error);
        res.status(400).json(error.message);
    }
}

export default isAuthorized;