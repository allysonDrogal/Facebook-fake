import axios from "axios";
import { environment } from "../../env";

import { responseInterceptor } from "./interceptors/responseInterceptor";

const api = axios.create({
  baseURL: environment.API_URL,
})
api.interceptors.response.use(responseInterceptor);

export default api;