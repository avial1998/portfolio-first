const express = require("express");
const ejs = require("ejs");
const data = require(__dirname + "/data");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/portfolio", (req, res) => {
  res.render("portfolio", {
    liveProjects: data.liveProjects,
    otherProjects: data.otherProjects,
  });
});
app.get("/gallery", (req, res) => {
  res.render("resume");
});
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () => console.log("server started at port 3000....!!!"));
