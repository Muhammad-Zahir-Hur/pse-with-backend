import mongoose from "mongoose";

const ClientSchema = mongoose.Schema({
	url: {
		type: String,
		required: [true, "Please Give an image url for the client company"],
	},
});

let Client = mongoose.model("Client", ClientSchema);

export default Client;
