import axios, { AxiosResponse } from "axios";

import Auth from "./auth/auth";

const myAxios = axios.create({
  baseURL: "https://thebetter.bsgroup.eu",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
  },
});

const response = <T>(response: AxiosResponse<T>) => response;

export const request = {
  post: <T>(url: string, body: {}) => myAxios.post<T>(url, body).then(response),
};

const agent = {
  Auth,
};

export default agent;
