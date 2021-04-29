import axios, { AxiosResponse } from "axios";

// axios.defaults.baseURL = "https://localhost:44348/api/";

export default class Agent {
  constructor(baseURL: string) {
    axios.defaults.baseURL = baseURL;
  }

  get = <T>(url: string) => axios.get<T>(url).then(this.responseBody);
  post = <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(this.responseBody);
  put = <T>(url: string, body: {}) =>
    axios.put<T>(url, body).then(this.responseBody);
  patch = <T>(url: string, body: {}) =>
    axios.patch<T>(url, body).then(this.responseBody);
  delete = <T>(url: string) => axios.delete<T>(url).then(this.responseBody);

  private responseBody = <T>(response: AxiosResponse<T>) => response.data;
}
