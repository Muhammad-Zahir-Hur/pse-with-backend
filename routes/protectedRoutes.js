import {
	newBlog,
	newArticlePage,
	editBlog,
	updateBlog,
	deleteBlog,
	

} from "../controllers/articleController.js";
import { RegisterAdmin, AdminHomePage } from "../controllers/adminController.js";

import express from "express";
const router = express.Router();

//protected Artitcle routes
router.get("/new", newArticlePage);
router.get("/edit/:slug", editBlog);
router.post("/new", newBlog);
router.put("/:slug", updateBlog);
router.delete("/delete/:slug", deleteBlog);
//protected admin routes
router.post("/register", RegisterAdmin);
router.get('/', AdminHomePage)

export default router;
