import { postService } from "@/service/post/post-service";
import { useQuery } from "@tanstack/react-query";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => postService.getAll,
  });
}

export function usePost(id: number) {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => postService.getOne(id),
  });
}
