import axios from "axios";

const KEY = "AIzaSyDyW2GBxPBaWBDmEwVFmS6AsNZkNBpTaeM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY,
  },
  headers: {},
});
