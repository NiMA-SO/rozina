import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponseGoldCurrency {
  gold: Gold[];
  currency: Currency[];
  cryptocurrency: CryptoCurrency[];
}

export interface Gold {
  date: string;
  time: string;
  time_unix: number;
  symbol: string;
  name_en: string;
  name: string;
  price: number;
  change_value: number;
  change_percent: number;
  unit: string;
}

export interface Currency {
  date: string;
  time: string;
  time_unix: number;
  symbol: string;
  name_en: string;
  name: string;
  price: number;
  change_value: number;
  change_percent: number;
  unit: string;
}

export interface CryptoCurrency {
  date: string;
  time: string;
  time_unix: number;
  symbol: string;
  name_en: string;
  name: string;
  price: string;
  change_percent: number;
  market_cap: number;
  unit: string;
  description: string;
}

const axiosInstance = axios.create({
  baseURL: "https://brsapi.ir/Api",
  params: {
    key: "Free11Qyv2bgKvkS3b1U9vypmKRX0SUc",
  },
});

const news = axios.create({
  baseURL: "https://www.tasnimnews.com",
  headers: {
    Accept: 'application/rss+xml',
  }
});

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getGoldCurrency = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponseGoldCurrency>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
