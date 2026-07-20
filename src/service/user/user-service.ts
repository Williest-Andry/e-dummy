import { User } from "@/interfaces/user/user-type";
import { genericGetOne } from "../common";

const BASE_URL = "user";

export const userService = {
  getOne: (id: number) => genericGetOne<User>(BASE_URL, id),
};
