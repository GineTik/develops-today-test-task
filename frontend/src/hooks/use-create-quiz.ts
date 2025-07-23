import { publicClient } from "@/services/instances";
import { toast } from "sonner";
import { queryClient } from "@/lib/query-client";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes.constants";

export function useCreateQuiz() {
  const router = useRouter();

  return publicClient.useMutation("post", "/quizzes", {
    onSuccess: (response) => {
      queryClient.invalidateQueries(
        publicClient.queryOptions("get", "/quizzes")
      );
      router.push(ROUTES.QuizDetails(response.id));
    },
    onError: () => {
      toast.error("Failed to create quiz");
    },
  });
}
