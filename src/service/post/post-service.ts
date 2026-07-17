import { Post } from "@/interfaces/post/post-type";
import { genericGetList } from "../common";

export const postService = {
  getAll: genericGetList<Post>("posts"),
};
