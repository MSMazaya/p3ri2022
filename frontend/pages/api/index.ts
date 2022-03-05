import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import axios from "axios";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api/videos", async (_, res) => {
  const key = process.env.YOUTUBE_KEY;

  try {
    const { data: videos } = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=UC0q3ZRelHNhWRhwe2thGzWQ&part=snippet,id&order=date&maxResults=8`
    );

    res.json(videos);
  } catch (err) {
    res.json(err);
  }
});

export default app;
