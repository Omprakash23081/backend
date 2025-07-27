import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.listen(PORT, () => {
  console.log(`app is rinning on port ${PORT}`);
});

app.get("/data", (req, res) => {
  res.send({
    massage: ["hi i am omprakash kumar"],
  });
});
