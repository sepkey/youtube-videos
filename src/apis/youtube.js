import axios from "axios";
const KEY = "AIzaSyDylQr7L0aZSHT_EzJE26SSxY_zszv1984";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
