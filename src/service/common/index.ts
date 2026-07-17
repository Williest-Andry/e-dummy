import { PostsApiResponse } from "@/interfaces/global";
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

export async function genericGetList<T>(
  url: string,
): Promise<PostsApiResponse | undefined> {
  try {
    const response = await axiosDummyClient.get(`${url}`);
    return response.data;
  } catch (e) {
    catchError(e);
  }
}
