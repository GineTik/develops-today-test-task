import { queryClient } from "@/lib/query-client";
import { publicClient } from "@/services/instances";
import { toast } from "sonner";

type UseDeleteQuestionOptions = {
  quizId: string;
};

export function useDeleteQuestion({ quizId }: UseDeleteQuestionOptions) {
  return publicClient.useMutation("delete", "/questions/{id}", {
    onSuccess: () => {
      queryClient.invalidateQueries(
        publicClient.queryOptions("get", "/quizzes/{id}", {
          params: { path: { id: quizId } },
        })
      );
      toast.success("Question deleted");
    },
    onError: () => {
      toast.error("Failed to delete question");
    },
  });
}
