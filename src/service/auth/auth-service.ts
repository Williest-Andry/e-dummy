import { AuthLoginResponse } from "@/interfaces/auth/auth-type";
import { axiosDummyClient, catchError } from "@/lib/axios";
import { AuthLogin } from "@/schema/auth/auth-schema";

export async function login(
  credentials: AuthLogin,
): Promise<AuthLoginResponse> {
  try {
    const response = await axiosDummyClient.post("/user/login", credentials);
    return response.data;
  } catch (e) {
    throw catchError(e);
  }
}
