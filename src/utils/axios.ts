import axios, { AxiosInstance } from "axios";

const AxiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL ?? "htpps://localhost:3000",
});

export default AxiosInstance;
