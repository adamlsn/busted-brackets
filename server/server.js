const express = require("express");

var PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

var path = require("path");

// routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
