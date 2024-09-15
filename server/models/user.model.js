import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please enter your name"]
    },
    userName: {
        type: String,
        required: [true, "Please enter your username"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minlength: [6, "Password must be at least of 6 characters"],
        select : false
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profilePic: {
        type: String,
        default: ""
    }
},
    { timestamps: true }
);

// to save hashed password
userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

// to compare password
userSchema.methods.comparePassword = async function (
    enteredPassword
) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = new mongoose.model("User", userSchema);

export default User;