import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/designs", (req, res) => {
    res.render("designs.ejs");
});
app.get("/websites", (req, res) => {
    res.render("websites.ejs");
});
app.get("/reviews", (req, res) => {
    res.render("reviews.ejs");
});
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});
app.get("/tos", (req, res) => {
    res.render("tos.ejs");
});
app.get("/privacy-policy", (req, res) => {
    res.render("privacy-policy.ejs");
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port: ${port}`);
})

