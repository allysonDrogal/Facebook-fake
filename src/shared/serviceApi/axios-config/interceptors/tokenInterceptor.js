import { environment } from "../../../env";

export const tokenInterceptor = (request) => {
 const token = localStorage.getItem(environment.APP_NAME);

 if (token && request.headers) {
  request.headers.Authorization = `Bearer ${token}`;
 }
  return request;
}