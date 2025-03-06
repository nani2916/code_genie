import express from "express";
import { signup } from "../controllers/userController.js";

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Welcome to the NoteNexus!");
});

router.route("/register").post(signup);

export default router;

