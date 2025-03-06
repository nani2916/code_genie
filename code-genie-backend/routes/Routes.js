import express from "express";
import { signup, signin, getUserProfile, updatePassword, updateUserProfile, chat_response, resetPassword, verifyCode, newPassword } from "../controllers/userController.js"; // Use import instead of require

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Welcome to the NoteNexus!");
});

router.route("/register").post(signup);
router.route("/login").post(signin);

export default router;

