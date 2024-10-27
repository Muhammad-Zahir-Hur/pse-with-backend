import mongoose from "mongoose";

const ClientSchema = mongoose.Schema({
	imageUrl: {
		type: String,
		required: [true, "Please Give an image url for the Client company"],
	},
	companyName: {
		type: String,
		required: [true, "Please provide the name of the company"],
	},
	altText: {
		type: String,
		required: [true, "Please Give an alt text for the image"],
	},
});

let Client = mongoose.model("Client", ClientSchema);

export default Client;
