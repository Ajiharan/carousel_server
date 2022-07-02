import express from "express";
import morgan from "morgan";
import cors from "cors";
import { slides } from "./images.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const PORT = process.env.PORT || 3600;

app.get("/api/carousel", (req, res) => {
  console.log(req.query);

  const count = req.query.slides || 0;
  const newSlides = slides.slice(0, count);

  res.status(200).json(newSlides);
});

app.listen(PORT, () => {
  console.log(`port listen in ${PORT}`);
});
