import jwt from "jsonwebtoken";
import Admin from "../models/adminModel.js";
import "dotenv/config";
const authkey = process.env.JWT_SECRET;
const Protect = async (req, res, next) => {
	req.userType = 0;
	if (!req.cookies.token) {
		return res.redirect("/");
	}

	try {
		const token = req.cookies.token;
		const decoded = jwt.verify(token, authkey);
		const admin = await Admin.findById(decoded.id).select("-password");
		if (!admin) {
			return res.redirect("/");
		}
		req.userType = 1;
		next();
	} catch (error) {
		return res.redirect("/");
	}
};

export default Protect;
