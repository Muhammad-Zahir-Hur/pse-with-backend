import express from "express";
import { LoginAdmin } from "../controllers/adminController.js";
import jwt from "jsonwebtoken";
import protectedRouter from "./protectedRoutes.js";
import Protect from "../middleware/authMiddleware.js";
import Admin from "../models/adminModel.js";
import "dotenv/config";
const authkey = process.env.JWT_SECRET;

const router = express.Router();

router.get("/", async (req, res) => {
	if (!req.cookies.token) {
		return res.render("admin/login");
	}
	// if NOT True proceed
	const token = req.cookies.token;
	const decoded = jwt.verify(token, authkey);
	const admin = await Admin.findById(decoded.id).select("-password");

	if (!admin) {
		return res.render("admin/login");
	}
	res.redirect("/admin/protected/");
});
router.post("/", LoginAdmin);
router.use("/protected", Protect, protectedRouter);

export default router;
