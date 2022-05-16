const express = require("express");

const port = process.env.PORT || 8000;


app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Wordle API");
});

app.listen(port, () => console.log(`Running on Port : ${port}`));

