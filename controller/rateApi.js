import api from "./ApiConfig";

export const rate = (id , rate_value) => api.post("assets/rate/" , {id,rate_value})