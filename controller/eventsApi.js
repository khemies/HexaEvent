import api from "./ApiConfig";

export const getEvents = () => api.get("assets/events/");
export const createEvent = (formData) =>
  api.post("assets/events/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
