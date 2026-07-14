import { saveTokens } from "@/store/auth/auth-store";
import { AuthLogin } from "@/schema/auth/auth-schema";
import { login } from "@/service/auth/auth-service";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationFn: (credentials: AuthLogin) => login(credentials),
    onSuccess: (data) => {
      saveTokens(data.accessToken, data.refreshToken);
      if (typeof window !== "undefined") window.location.href = "/posts";
    },
  });
}
