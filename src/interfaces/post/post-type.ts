import { Meta } from "../global";

export interface Post {
  id: number;
  title: number;
  body: number;
  tags: string[];
  reactions: { likes: number; dislikes: number };
  views: number;
  userId: number;
}

export interface PostsApiResponse extends Meta {
  posts: Post[];
}
