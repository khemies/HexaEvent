import api from "./ApiConfig";

export const getDonMethods = () => api.get("donation-methods/");
export const getDonTypes = () => api.get("donation-types/");
export const getDonSources = () => api.get("donation-sources/");
export const acceptDon = (values) =>
  api.post("donation-requests/validate", values);
export const refuseDon = (values) =>
  api.post("donation-requests/refuse", values);
