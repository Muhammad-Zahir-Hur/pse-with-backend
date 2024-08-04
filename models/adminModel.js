import mongoose from "mongoose";

const AdminSchema = mongoose.Schema(
	{
		name: { type: String, required: [true, "Please Provide a Name"], unique: true },
		password: {
			type: String,
			required: [true, "Please Provide a password"],
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Admin", AdminSchema);
