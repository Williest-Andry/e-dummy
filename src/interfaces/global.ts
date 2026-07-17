import { Post } from "./post/post-type";

export interface Meta {
  total: number;
  skip: number;
  limit: number;
}

export interface PostsApiResponse extends Meta {
  posts: Post[];
}
