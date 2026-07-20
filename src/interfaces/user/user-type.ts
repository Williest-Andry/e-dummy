export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  birthDate: string;
  role: "admin" | "moderator" | "user";
  image: string;
}
