import { queryClient } from "@/lib/query-client";
import { publicClient } from "@/services/instances";
import { toast } from "sonner";

export function useDeleteQuiz() {
  return publicClient.useMutation("delete", "/quizzes/{id}", {
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["get", "/quizzes"] }),
    onError: () => {
      toast.error("Failed to delete quiz");
    },
  });
}
