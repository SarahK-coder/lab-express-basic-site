const express = require('express');
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// Route for home / landing page
app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/views/index.html");
});

// Route for about page
app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + "/views/about.html");
});

// Route for works page
app.get("/works", (req, res, next) => {
    res.sendFile(__dirname + "/views/works.html");
});

// Route for gallery page
app.get("/gallery", (req, res, next) => {
    res.sendFile(__dirname + "/views/gallery.html");
});

// Server Started
app.listen(3000);