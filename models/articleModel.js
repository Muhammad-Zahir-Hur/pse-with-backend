import mongoose from "mongoose";
import slugify from "slugify";
import { marked } from "marked";
import createDomPurify from "dompurify";
import { JSDOM } from "jsdom";

const dompurify = createDomPurify(new JSDOM().window);

const ArticleSchema = mongoose.Schema({
	title: { type: String, required: [true, "Please Provide a Title"] },

	description: {
		type: String,
	},
	markdown: {
		type: String,
		required: [true, "Please enter the markdown for the blog"],
	},
	sanitizedHtml: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
		required: true,
		unique: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

ArticleSchema.pre("validate", async function (next) {
	if (this.title) {
		this.slug = slugify(this.title, {
			lower: true,
			strict: true,
		});
	}
	if (this.markdown) {
		this.sanitizedHtml = dompurify.sanitize(marked(this.markdown));
	}
	next();
});

export default mongoose.model("Article", ArticleSchema);
