// service/api-client.ts
import axios, { AxiosRequestConfig } from "axios";

const TOKEN = process.env.NEXT_PUBLIC_ANAR360_TOKEN ?? ""; // یا از .env.local استفاده کن

const axiosInstance = axios.create({
  baseURL: "https://api.anar360.com/api/360",
  // هدر Authorization رو اینجا ست کن (اگر لازم باشه)
  headers: {
    ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // config اختیاریه؛ می‌تونه شامل params هم باشه
  get = (config?: AxiosRequestConfig): Promise<T> => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };
}

export default APIClient;
