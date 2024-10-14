import mongoose from "mongoose";

const ClientSchema = mongoose.Schema({
	imageUrl: {
		type: String,
		required: [true, "Please Give an image url for the Client company"],
	},
	websiteUrl: {
		type: String,
		required: [true, "Please Give a Url for the website of the Client company"],
	},
	altText: {
		type: String,
		required: [true, "Please Give an alt text for the image"],
	},
});

let Client = mongoose.model("Client", ClientSchema);

export default Client;
