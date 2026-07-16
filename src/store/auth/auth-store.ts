import { AuthLoginResponse } from "@/interface/auth/auth-type";
import { redirect } from "next/navigation";
import { create } from "zustand";

export const saveTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const getAccessToken = () => {
  return typeof window !== "undefined"
    ? localStorage.getItem("accessToken")
    : "";
};

export const getRefreshToken = () => {
  return typeof window !== "undefined"
    ? localStorage.getItem("refreshToken")
    : "";
};

export const logout = () => {
  localStorage.clear();
  redirect("/");
};

export const useAuthStore = create<AuthLoginResponse>((set) => ({
  id: "",
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  image: "",
  accessToken: getAccessToken() ?? "",
  refreshToken: getRefreshToken() ?? "",

  setAuthUser: (authUser: AuthLoginResponse) =>
    set({
      id: authUser.id,
      username: authUser.username,
      email: authUser.email,
      firstName: authUser.firstName,
      lastName: authUser.lastName,
      gender: authUser.gender,
      image: authUser.image,
      accessToken: authUser.accessToken,
      refreshToken: authUser.refreshToken,
    }),
}));
