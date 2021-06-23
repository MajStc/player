import axios, { AxiosResponse } from "axios";

import Auth from "./auth/auth";
import Video from "./video/video";

const myAxios = axios.create({
  baseURL: "https://thebetter.bsgroup.eu",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
  },
});

const response = <T>(response: AxiosResponse<T>) => response;

export const request = {
  post: <T>(url: string, body: {}) => myAxios.post<T>(url, body,{ headers: { 'Authorization': localStorage.getItem('token') } }).then(response),
};

const agent = {
  Auth,
  Video
};

export default agent;
