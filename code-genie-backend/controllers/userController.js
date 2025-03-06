import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { EMAIL_PASS, EMAIL_USER, JWT_SECRET } from "../config.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import nodemailer from "nodemailer";
import axios from "axios";

export const signup = async (req, res) => {
    const { name, email, mobile, uname, password } = req.body;

    try {
        const existingUser = await User.findOne({ uname });
        if (existingUser) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, mobile, uname, password: hashedPassword });

        await newUser.save();
        res.status(StatusCodes.CREATED).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error" });
    }
};

