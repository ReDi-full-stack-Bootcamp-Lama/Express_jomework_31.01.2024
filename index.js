
"use strict"; // Defines that JavaScript code should be executed in "strict mode".

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res, next) => {
  res.send("Welcome to my Express.js server!");
});

app.get("/about", (req, res, next) => {
  res.send("This is the about me section!");
});

// Serve static files from the 'public' directory---- http://localhost:3000/index.html
app.use(express.static('public'));

// Route for handling query parameters--- http://localhost:3000/greet?name=Lama
app.get("/greet", (req, res, next) => {
    const name = req.query.name; // Extract the 'name' query parameter
    if (name) {
      res.send(`Hello, ${name}!`);
    } else {
      res.send("Hello!");
    }
  });

  

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
