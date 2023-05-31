import api from "./ApiConfig";

export const getProfile = () => api.get("assets/profile/detail");
export const updateProfile = (obj) =>
  api.patch("assets/profile/update", obj, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
