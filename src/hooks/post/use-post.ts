import { postService } from "@/service/post/post-service";
import { useQuery } from "@tanstack/react-query";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => postService.getAll,
  });
}
