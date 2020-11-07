import axios from "axios";

const scoresApi = axios.create({
  baseURL: "http://localhost:3002/api",
});

export const insertScore = (payload) => scoresApi.post(`/score`, payload);
export const getAllScores = () => scoresApi.get(`/scores`);

const scoresApis = {
  insertScore,
  getAllScores,
};

export default scoresApis;
