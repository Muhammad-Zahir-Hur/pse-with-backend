import express from "express";
import errorHandler from "./middleware/errorHandler.js";
import articlesRouter from "./routes/articleRoutes.js";
import protectedRouter from "./routes/protectedRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import renderPageRouter from "./routes/renderPages.js";
import connectDB from "./config/db.js";
import methodOverride from "method-override";
import Article from "./models/articleModel.js";
import cookieParser from "cookie-parser";
// const dotenv = env.config();
const PORT = 5000;
const app = express();

connectDB();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", async (req, res) => {
	const articles = await Article.find({}).sort({ createdAt: "desc" });
	res.render("index", { articles });
});
app.use("/articles", articlesRouter);
app.use("/admin", adminRouter);
app.use("/page/", renderPageRouter);

// app.use("/protected", Protect, protectedRouter);
app.use(errorHandler);

app.listen(PORT);
console.log("app is running at the port " + PORT);
