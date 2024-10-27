import Article from "../models/articleModel.js";
// import jwt from "jsonwebtoken";

const allArticlesPage = async (req, res) => {
	const articles = await Article.find({}).sort({ createdAt: "desc" });
	res.status(200).render("articles/all_articles", { articles });
};

const newArticlePage = (req, res) => {
	res.render("articles/new", {
		article: { title: "", description: "", markdown: "" },
	});
};

// post at /articles
const newArticle = async (req, res) => {
	const { title, description, markdown } = req.body;

	try {
		await Article.create({
			markdown,
			title,
			description,
		});
		res.redirect("/admin/protected/");
	} catch (error) {
		res.render("articles/new", {
			article: {
				title,
				description,
				markdown,
				error,
			},
		});
	}
	return;
};

const getArticles = async (req, res) => {
	const articles = await Article.find({}).sort({ createdAt: "desc" });
	res.status(200).render("articles/index", { articles });
};

const showArticle = async (req, res, next) => {
	try {
		const article = await Article.findOne({ slug: req.params.slug });
		res.render("articles/show", { article });
	} catch (error) {
		res.redirect("/");
	}
};

const editArticle = async (req, res) => {
	const article = await Article.findOne({ slug: req.params.slug });

	res.render("articles/edit", { article });
};

const updateArticle = async (req, res) => {
	const article = await Article.findOne({ slug: req.params.slug });

	const { title, description, markdown } = req.body;

	article.title = title;
	article.description = description;
	article.markdown = markdown;
	article.save();

	res.redirect("/admin/protected/");
};

const deleteArticle = async (req, res) => {
	try {
		await Article.findOneAndDelete({ slug: req.params.slug });

		res.redirect("/admin/protected/");
	} catch (error) {
		res.send({ error: error.message, stack: error.stack });
	}
};

export {
	newArticle,
	getArticles,
	showArticle,
	newArticlePage,
	editArticle,
	updateArticle,
	deleteArticle,
	allArticlesPage,
};
