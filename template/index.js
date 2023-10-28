// Initialize express app
const express = require("express");
const path = require("path");
// Initialize app
const app = express();

// Require dotenv

require("dotenv").config();

// Access to public folder

app.use(express.static(path.join(__dirname, "public")));

// Initialize PORT number
const PORT = process.env.PORT;

// Routes
app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Hello World",
  });
});

// routes folder

app.use("/contact", require("./routes/index"));

// Listen to PORT
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
