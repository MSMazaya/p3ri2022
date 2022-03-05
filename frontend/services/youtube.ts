import axios from "axios";

export const getYoutubeVideos = async () => {
  const { data } = await axios.get("/api/videos");
  return data;
};
