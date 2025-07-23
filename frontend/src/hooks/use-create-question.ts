import { publicClient } from "@/services/instances";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

type UseCreateQuestionOptions = {
  quizId: string;
};

export function useCreateQuestion({ quizId }: UseCreateQuestionOptions) {
  const queryClient = useQueryClient();

  return publicClient.useMutation("post", "/questions", {
    onSuccess: () => {
      queryClient.invalidateQueries(
        publicClient.queryOptions("get", "/quizzes/{id}", {
          params: { path: { id: quizId } },
        })
      );
    },
    onError: () => {
      toast.error("Failed to create question");
    },
  });
}
