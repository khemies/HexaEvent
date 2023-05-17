import api from "./ApiConfig";

export const authenticate = (values) => api.post("auth/jwt/create", values);
export const getAccount = (refresh) => api.post("auth/jwt/refresh", { refresh });
export const register = (values) => api.post("auth/users/" , values);
