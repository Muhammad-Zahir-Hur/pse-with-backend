import { showArticle, getArticles } from "../controllers/articleController.js";

import express from "express";
// import Protect from "../middleware/authMiddleware.js";
const router = express.Router();
router.get("/all", getArticles);
router.get("/:slug", showArticle);
//

export default router;
