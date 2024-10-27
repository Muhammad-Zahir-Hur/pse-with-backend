import Client from "../models/clientModel.js";
// import jwt from "jsonwebtoken";

const allClientsPage = async (req, res) => {
	const clients = await Client.find({}).sort({ createdAt: "desc" });
	res.status(200).render("clients/index", { clients });
};

const newClientPage = (req, res) => {
	return res.status(200).render("clients/newClient");
};

const RegisterClient = async (req, res, next) => {
	console.log(req.body);
	const imageUrl = req.body.imageUrl;
	const companyName = req.body.companyName;
	const altText = req.body.altText;

	console.log(req.body);
	try {
		await Client.create({
			imageUrl,
			companyName,
			altText,
		});
		return res.redirect("/protected");
	} catch (error) {
		next(error);
	}
};

const deleteClient = async (req, res, next) => {
	try {
		await Client.findOneAndDelete({ companyName: req.params.companyName });

		res.redirect("/protected/");
	} catch (error) {
		// res.send({ error: error.message, stack: error.stack });
		return next(error);
	}
};

export { newClientPage, RegisterClient, deleteClient, allClientsPage };
