import axios from "axios";
import { VideoList } from "types/video";

export const getYoutubeVideos = async () => {
  const { data } = await axios.get<VideoList>(
    "http://localhost:3000/api/videos"
  );
  return data;
};
