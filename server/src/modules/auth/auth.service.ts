import { Request, Response } from "express";
import { User } from "../../database/models/User";
import { ApiError } from "../../utils/errorHandler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function registerService(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const existUser = await User.findOne({ email });

    if (existUser) throw new ApiError(409, "Email already exist.");

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.insertOne({
        name,
        email,
        password: hashPassword
    })

    res.status(200).json({
        success: true,
        message: "User registed",
        data: user,
    })
}

export async function loginService(req: Request, res: Response) {
    const { email, password } = req.body;

    const existUser = await User.findOne({ email });
    if (!existUser)
        throw new ApiError(401, "Email not found");

    const isMatch = await bcrypt.compare(password, existUser.password);

    if (!isMatch)
        throw new ApiError(401, "Password is not correct");

    const token = jwt.sign({
        userId: existUser._id
    }, process.env.JWT_SECRET!, { expiresIn: '7d' });

    res.status(200).json({
        success: true,
        message: "Login successful",
        data: token,
    })
}


export function logoutService(req: Request, res: Response) {
    res.clearCookie("token");

    res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
}
