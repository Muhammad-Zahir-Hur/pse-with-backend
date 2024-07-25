import Article from "../models/articleModel.js";
// import jwt from "jsonwebtoken";

const newArticlePage = (req, res) => {
	res.render("articles/new", {
		article: { title: "", description: "", markdown: "" },
	});
};

// post at /articles
const newBlog = async (req, res) => {
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

const getBlogs = async (req, res) => {
	const articles = await Article.find({}).sort({ createdAt: "desc" });
	res.status(200).render("articles/index", { articles });
};

const showBlog = async (req, res, next) => {
	try {
		const article = await Article.findOne({ slug: req.params.slug });
		res.render("articles/show", { article });
	} catch (error) {
		res.redirect("/");
	}
};

const editBlog = async (req, res) => {
	const article = await Article.findOne({ slug: req.params.slug });

	res.render("articles/edit", { article });
};

const updateBlog = async (req, res) => {
	const article = await Article.findOne({ slug: req.params.slug });

	const { title, description, markdown } = req.body;

	article.title = title;
	article.description = description;
	article.markdown = markdown;
	article.save();

	res.redirect("/admin/protected/");
};

const deleteBlog = async (req, res) => {
	try {
		await Article.findOneAndDelete({ slug: req.params.slug });

		res.redirect("/admin/protected/");
	} catch (error) {
		res.send({ error: error.message, stack: error.stack });
	}
};

export {
	newBlog,
	getBlogs,
	showBlog,
	newArticlePage,
	editBlog,
	updateBlog,
	deleteBlog,
};
