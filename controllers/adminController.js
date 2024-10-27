import Admin from "../models/adminModel.js";
import Article from "../models/articleModel.js";
import Client from "../models/clientModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
const authkey = process.env.JWT_SECRET;

const allAdminsPage = async (req, res) => {
	const superAdmin = process.env.FIRST_ADMIN;
	await Admin.find();
	const admins = await Admin.find({ name: { $ne: superAdmin } }).sort({
		createdAt: "desc",
	});
	res.status(200).render("admin/all_admins", { admins });
};

const RegisterAdmin = async (req, res, next) => {
	console.log("inside os RegisterAdmin route");
	const { name, password } = req.body;
	console.log(`fetching name and password : ......... name: ${name}.......
	password: ${password}`);
	try {
		if (!name || !password) {
			console.log("!name || !password is True");
			res.status(400);
			throw new Error("Please Include all the Fields");
		}
	} catch (err) {
		console.log("error inside !name || !password");
		next(err);
	}

	const adminExists = await Admin.findOne({ name });
	if (adminExists) {
		console.log("admin exists");
		return res.status(400).send("admin already Exists");
	}

	//Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);
	console.log(
		"name fetched,hashed password created,  now calling Admin.create()"
	);

	try {
		const admin = await Admin.create({
			name,
			password: hashedPassword,
		});

		console.log("admin created");
		res.cookie("token", generateToken(admin._id));
		return res.redirect("/admin/protected/");
	} catch (error) {
		next(error);
	}
};

const LoginAdmin = async (req, res, next) => {
	const { name, password } = req.body;

	const admin = await Admin.findOne({ name });
	console.log(admin);
	if (admin && (await bcrypt.compare(password, admin.password))) {
		res.cookie("token", generateToken(admin._id));
		return res.redirect("admin/protected/");
	}
	next();
};

const AdminHomePage = async (req, res) => {
	const articles = await Article.find({}).sort({ createdAt: "desc" });
	const clients = await Client.find({}).sort({ createdAt: "desc" });
	res.status(200).render("admin/index", { articles, clients });
};

const newAdminPage = (req, res) => {
	res.status(200).render("admin/newAdmin");
};

function generateToken(id) {
	return jwt.sign({ id }, authkey, { expiresIn: "30d" });
}

const deleteAdmin = async (req, res, next) => {
	const superAdmin = process.env.FIRST_ADMIN;
	const admin_to_delete = req.params.name;
	if (admin_to_delete == superAdmin) {
		return res.redirect("/");
	}
	try {
		await Admin.findOneAndDelete({ name: req.params.name });

		res.redirect("/");
	} catch (error) {
		// res.send({ error: error.message, stack: error.stack });
		return next(error);
	}
};
export {
	RegisterAdmin,
	LoginAdmin,
	AdminHomePage,
	newAdminPage,
	allAdminsPage,
	deleteAdmin,
};
