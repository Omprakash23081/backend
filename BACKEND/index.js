const express = require("express");
require("dotenv").config();

const app = express();

// Use Render-assigned PORT or fallback to 5000 locally
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log("hellow duniya");
  res.send("hellow Omprakash kumar"); // Send response to browser
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
