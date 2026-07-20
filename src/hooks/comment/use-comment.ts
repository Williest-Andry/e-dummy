import { commentService } from "@/service/comment/comment-service";
import { useQuery } from "@tanstack/react-query";

export function useCommentsByPostId(postId: number) {
  return useQuery({
    queryKey: ["comments", "post", postId],
    queryFn: () => commentService.getAllByPostId(postId),
  });
}
