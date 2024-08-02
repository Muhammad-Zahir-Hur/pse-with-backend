import Admin from "../models/adminModel.js";
import Article from "../models/articleModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
const authkey = process.env.JWT_SECRET;

const RegisterAdmin = async (req, res, next) => {
	const { name, password } = req.body;
	try {
		if (!name || !password) {
			res.status(400);
			throw new Error("Please Include all the Fields");
		}
	} catch (err) {
		next(err);
	}

	const adminExists = await Admin.findOne({ name });
	if (adminExists) {
		return res.status(400).send("admin already Exists");
	}

	//Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const admin = await Admin.create({
		name,
		password: hashedPassword,
	});

	if (admin) {
		
		res.cookie("token", generateToken(admin._id));
		return res.redirect("admin/protected/");
	}
};

const LoginAdmin = async (req, res, next) => {
	const { name, password } = req.body;

	const admin = await Admin.findOne({ name });
	if (admin && (await bcrypt.compare(password, admin.password))) {
		res.cookie("token", generateToken(admin._id));
		return res.redirect("admin/protected/");
	}
	next();
};

const AdminHomePage = async (req, res) => {
	const articles = await Article.find({}).sort({ createdAt: "desc" });
	res.status(200).render("admin/index", { articles });
};

const newAdminPage = async (req, res) => {
	res.status(200).render("admin/newAdmin");
};

function generateToken(id) {
	return jwt.sign({ id }, authkey, { expiresIn: "30d" });
}
export { RegisterAdmin, LoginAdmin, AdminHomePage, newAdminPage };
