import axios from "axios";

export const saveMap = (data) => axios.post(`https://localhost:44312/map`, data)