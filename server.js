import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const __dirname = dirname(fileURLToPath(import.meta.url));

let blogList = [];

/* Route */

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/home", (req, res) => {
    res.render("home.ejs");
});

app.get("/post", (req, res) => {
    res.render("post-creation.ejs");
});

app.get("/blogDetails", (req, res) => {
    res.render("bloglist.ejs", { blogList: blogList });
});

app.post("/submit", (req, res) => {
    const blogTitle = req.body.blogtitle;
    const blogDes = req.body.blogdes;
    blogList.push({
        id: generateId(),
        title: blogTitle,
        description: blogDes,
    });
    res.redirect("/blogDetails");
});

function generateId() {
    return Math.floor(Math.random() * 10000); //generating random number for ID
}

/* Functionalities */

/* View blog Functionality */

app.get("/blogDetails/:id", (req, res) => {
    const blogId = req.params.id;
    const blog = blogList.find(b => b.id == blogId);
    if (blog) {
        res.render("viewBlog.ejs", { blog: blog });
    } else {
        res.status(404).send("Blog not found");
    }
});

/* Edit blog Functionality */

app.get("/editBlog/:id", (req, res) => {
    const blogId = req.params.id;
    const blog = blogList.find(b => b.id == blogId);
    if (blog) {
        res.render("editBlog.ejs", { blog: blog });
    } else {
        res.status(404).send("Blog not found");
    }
});

/* Update blog Functionality */

app.post("/updateBlog/:id", (req, res) => {
    const blogId = req.params.id;
    const blogIndex = blogList.findIndex(b => b.id == blogId);
    if (blogIndex !== -1) {
        blogList[blogIndex].title = req.body.blogtitle;
        blogList[blogIndex].description = req.body.blogdes;
        res.redirect("/blogDetails");
    } else {
        res.status(404).send("Blog not found");
    }
});

/* Delete blog Functionality */

app.post("/deleteBlog/:id", (req, res) => {
    const blogId = req.params.id;
    blogList = blogList.filter(b => b.id != blogId);
    res.redirect("/blogDetails");
});

/*Error-handling*/

app.use((err, req, res, next) => {
    console.error('Error stack:', err.stack);
    console.error('Error message:', err.message);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
