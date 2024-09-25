import express from "express";
import Article from "../models/articleModel.js";
const router = express.Router();

router.use("/:pageName", async (req, res) => {
	const articles = await Article.find({}).sort({ createdAt: "desc" });

	return res.render(`pages/${req.params.pageName}`, { articles });
});

export default router;
