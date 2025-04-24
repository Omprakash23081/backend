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

<<<<<<< HEAD
  res.send(data);
=======
app.get("/", (req, res) => {
  console.log("hellow duniya");
  res.send("hellow Omprakash kumar how was your day"); // Send response to browser
>>>>>>> 618bfa2a6e57c7cc1cf49cf70b024cf37f78bded
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});
