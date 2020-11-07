import axios from "axios";

const phrasesApi = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const getRandomPhrase = () => phrasesApi.get(`/phrase`);

const phraseApis = {
  getRandomPhrase,
};

export default phraseApis;
