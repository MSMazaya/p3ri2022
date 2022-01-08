import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ slug: "index", test: process.env.TEST || "No test env" });
});

app.get("/api/:slug", (req, res) => {
  const { slug } = req.params;
  res.json({ slug });
});

export default app;
