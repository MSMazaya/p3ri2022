import axios from "axios";
import { VideoList } from "types/video";

export const getYoutubeVideos = async () => {
  const key = process.env.YOUTUBE_KEY;
  const { data } = await axios.get<VideoList>(
    `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=UC0q3ZRelHNhWRhwe2thGzWQ&part=snippet,id&order=date&maxResults=8`
  );
  return data;
};
