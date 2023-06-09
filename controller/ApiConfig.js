import { create } from "apisauce";
import StorageToken from "../Auth/storage";

const api = create({
  baseURL: "http://51.120.2.164:8002/",
});

api.addAsyncRequestTransform(async (request) => {
  request.headers["Access-Control-Allow-Headers"] =
    "X-Requested-With, content-type, Authorization";
  request.headers["Access-Control-Allow-Methods"] =
    "GET, POST, PUT, DELETE, PATCH, OPTIONS";
  request.headers["Access-Control-Allow-Origin"] = "*";
  request.headers["Connection"] = "close";

  const authToken = await StorageToken.getToken();
  if (!authToken) return;
  request.headers["Authorization"] = "JWT " + authToken;
});
export default api;
