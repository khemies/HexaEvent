import api from "./ApiConfig";

export const get_requests = (page, search, size) => {
  return api.get(
    `all-donations-request-list?page=${page}&size=${size}&search=${search}`
  );
};
