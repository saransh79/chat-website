import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookies from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, gender } = req.body;

        const user = await User.findOne({ userName });

        if (user) {
            return res.status(400).json({
                message : "Username already exists"
            })
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = new User({
            fullName,
            userName,
            password,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        })
        await newUser.save();

        res.status(200).json({
            message: 'Account created successfully!'
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}

export const login = async (req, res) => {
    try {
        const {userName, password} = req.body;

        if(!userName || !password){
            return res.status(400).send({message : "Please enter username or password"});
        }

        const user= await User.findOne({userName}).select("+password");

        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({message: "Invalid credentials"});
        }

        generateTokenAndSetCookies(user._id, res);

        res.status(200).json(user)

    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge : 0});
        res.status(200).json({
            message: "Logged out successfully"
        })
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}
