import { Meta } from "../global";

export interface Comment {
  id: number;
  body: string;
  postId: 6;
  likes: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
}

export interface CommentApiResponse extends Meta {
  comments: Comment[];
}
