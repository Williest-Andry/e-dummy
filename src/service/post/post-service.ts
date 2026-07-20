import { Post, PostsApiResponse } from "@/interfaces/post/post-type";
import { genericGetList, genericGetOne } from "../common";

const BASE_URL = "posts";

export const postService = {
  getAll: genericGetList<PostsApiResponse>(BASE_URL),
  getOne: (id: number) => genericGetOne<Post>(BASE_URL, id),
};
