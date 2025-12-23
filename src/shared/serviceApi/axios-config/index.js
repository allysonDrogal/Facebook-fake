import axios from "axios";
import { environment } from "../../env";

import { responseInterceptor, tokenInterceptor } from "./interceptors";


const api = axios.create({
  baseURL: environment.API_URL,
})
api.interceptors.response.use(responseInterceptor);
api.interceptors.request.use(tokenInterceptor);

export default api;