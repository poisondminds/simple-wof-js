import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertScore = payload => api.post(`/score`, payload)
export const getAllScores = () => api.get(`/scores`)

const apis = {
    insertScore,
    getAllScores
}

export default apis