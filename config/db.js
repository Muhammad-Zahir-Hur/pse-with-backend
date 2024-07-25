import mongoose from "mongoose";
import "dotenv/config";
const mongoUri = process.env.MONGO_URI;
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(mongoUri);
		console.log(`Connected to database: ${conn.connection.host}`);
	} catch (err) {
		console.log(`Error: ${err.message}`);
		process.exit(1);
	}
};

export default connectDB;
