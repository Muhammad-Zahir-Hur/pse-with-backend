import mongoose from "mongoose";

const AdminSchema = mongoose.Schema(
	{
		name: { type: String, required: [true, "Please Provide a Name"] },
		password: {
			type: String,
			required: [true, "Please Provide a password"],
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Admin", AdminSchema);
