import { publicClient } from "@/services/instances";

type UseQuizOptions = {
  id?: string;
};

export function useQuiz({ id }: UseQuizOptions) {
  return publicClient.useQuery("get", "/quizzes/{id}", {
    params: { path: { id: id! } },
    enabled: !!id,
    queryKey: ["get", "quizzes/{id}"],
  });
}
