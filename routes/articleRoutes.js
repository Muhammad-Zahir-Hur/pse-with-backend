import { showBlog, getBlogs } from "../controllers/articleController.js";
import protectedRouter from "./protectedRoutes.js";
import Protect from "../middleware/authMiddleware.js";

import express from "express";
// import Protect from "../middleware/authMiddleware.js";
const router = express.Router();
// base route at "/tickets"
router.get("/all", getBlogs);
router.get("/:slug", showBlog);
//
router.use("/protected", Protect, protectedRouter);

export default router;
