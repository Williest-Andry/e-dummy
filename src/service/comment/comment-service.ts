import { CommentApiResponse } from "@/interfaces/comment/comment-type";
import { genericGetList } from "../common";

export const commentService = {
  getAllByPostId: (postId: number) =>
    genericGetList<CommentApiResponse>(`/comments/post/${postId}`),
};
