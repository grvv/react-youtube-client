import axios from "axios";

// https://developers.google.com/youtube/v3/guides/implementation/search
// https://developers.google.com/youtube/v3/docs/search/list#usage
// https://developers.google.com/youtube/v3/docs/errors

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 10,
    // videoEmbeddable: 'true',
    key: 'your_api_key'
  }
});

export default youtube;
