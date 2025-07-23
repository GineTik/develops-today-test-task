"use client";

import { LoadingButton } from "@/components/ui/loading-button";
import { useCreateQuestion } from "@/hooks/use-create-question";

type CreateQuestionButtonsProps = {
  quizId: string;
};

export function CreateQuestionButtons({ quizId }: CreateQuestionButtonsProps) {
  const createQuestion = useCreateQuestion({ quizId });

  return (
    <div className="flex gap-2">
      <LoadingButton
        variant="outline"
        onClick={() =>
          createQuestion.mutate({
            body: {
              title: "New question",
              type: "CHECKBOX",
              quizId,
            },
          })
        }
        isLoading={createQuestion.isPending}
      >
        Add multiple choice
      </LoadingButton>
      <LoadingButton
        variant="outline"
        onClick={() =>
          createQuestion.mutate({
            body: { title: "New question", type: "BOOLEAN", quizId },
          })
        }
        isLoading={createQuestion.isPending}
      >
        Add true/false
      </LoadingButton>
      <LoadingButton
        variant="outline"
        onClick={() =>
          createQuestion.mutate({
            body: { title: "New question", type: "TEXT", quizId },
          })
        }
        isLoading={createQuestion.isPending}
      >
        Add short answer
      </LoadingButton>
    </div>
  );
}
