import { axiosDummyClient, catchError } from "@/lib/axios";

export async function genericCreate<T>(
  url: string,
  data: T,
): Promise<T | undefined> {
  try {
    const response = await axiosDummyClient.post(`${url}`, data);
    return response.data;
  } catch (e) {
    catchError(e);
  }
}
