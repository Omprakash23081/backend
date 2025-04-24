require("dotenv").config();
const express = require("express");

const app = express();
const port = 5000;

// Simple API
app.get("/about", (req, res) => {
  const data = {
    title: "Hello",
    description: "World",
  };

  res.send(data);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});
