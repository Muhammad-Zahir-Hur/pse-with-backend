import {
	newArticle,
	newArticlePage,
	editArticle,
	updateArticle,
	deleteArticle,
	allArticlesPage,
} from "../controllers/articleController.js";

import {
	RegisterAdmin,
	AdminHomePage,
	newAdminPage,
	allAdminsPage,
	deleteAdmin,
} from "../controllers/adminController.js";

import {
	newClientPage,
	RegisterClient,
	allClientsPage,
	deleteClient,
} from "../controllers/clientsController.js";
import express from "express";
const router = express.Router();

//protected Artitcle routes
router.get("/newArticlePage", newArticlePage);
router.get("/allArticlesPage", allArticlesPage);
router.get("/editArticle/:slug", editArticle);
router.post("/newArticle", newArticle);
router.put("/:slug", updateArticle);
router.delete("/delete/:slug", deleteArticle);
//protected admin routes
router.get("/newAdmin", newAdminPage);
router.post("/newAdmin", RegisterAdmin);
router.get("/newClient", newClientPage);
router.get("/allAdminsPage", allAdminsPage);
router.post("/RegisterClient", RegisterClient);
router.delete("/deleteAdmin/:name", deleteAdmin);

// protected clients
router.delete("/deleteClient/:companyName", deleteClient);

router.get("/allClientsPage", allClientsPage);

router.get("/", AdminHomePage);

export default router;
