import express from "express";
import { LoginAdmin } from "../controllers/adminController.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import protectedRouter from "./protectedRoutes.js";
import Protect from "../middleware/authMiddleware.js";
import Admin from "../models/adminModel.js";
import "dotenv/config";
const authkey = process.env.JWT_SECRET;

const router = express.Router();

router.get("/", async (req, res) => {
	const admins = await Admin.find({});

	if (admins.length > 0) {
		if (!req.cookies.token) {
			return res.render("admin/login");
		}
		// if NOT True proceed
		try {
			const token = req.cookies.token;

			const decoded = jwt.verify(token, authkey);
			const admin = await Admin.findById(decoded.id).select("-password");
	
			if (!admin) {
				return res.render("admin/login");
			}
			return res.redirect("/admin/protected/");
		} catch (error) {
			return res.render("admin/login")
		}

	}
	const name = process.env.FIRST_ADMIN;
	console.log(name);
	const salt = await bcrypt.genSalt(10);
	const password = process.env.FIRST_ADMIN_PASSWORD;

	/// await the bycript.hash() necessarily
	const hashedPassword = await bcrypt.hash(password, salt);
	await Admin.create({ name, password: hashedPassword });
	return res.render("admin/login");
});
router.post("/", LoginAdmin);
router.use("/protected", Protect, protectedRouter);

export default router;
