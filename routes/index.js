const Router = require("express").Router();
const path = require("path");

Router.get("/", (req, res) => {
  // Build the file path to 'contact.html' in the 'public' directory
  const filePath = path.join(__dirname, "../public", "contact.html");

  // Send the file
  res.sendFile(filePath);
});

module.exports = Router;
