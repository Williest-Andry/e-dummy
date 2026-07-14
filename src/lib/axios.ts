import axios, { isAxiosError } from "axios";

export const axiosDummyClient = axios.create({
  baseURL: "https://dummyjson.com",
});

export const catchError = (error: unknown) => {
  if (isAxiosError(error)) throw new Error(error.message);

  throw new Error("Unexpected error");
};
