import { userService } from "@/service/user/user-service";
import { useQuery } from "@tanstack/react-query";

export function useUser(id: number) {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => userService.getOne(id),
  });
}
