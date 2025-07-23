import { Button } from "@/components/ui/button";
import { GhostInput } from "@/components/ui/ghost-input";
import { ApiSchemas } from "@/services/types";
import { useState } from "react";
import { Trash } from "lucide-react";
import { LoadingButton } from "@/components/ui/loading-button";
import { useDeleteQuestion } from "@/hooks/use-delete-question";

type QuestionFormProps = {
  question: ApiSchemas["GetQuestionDto"];
  quizId: string;
};

export function QuestionForm({ question, quizId }: QuestionFormProps) {
  const deleteQuestion = useDeleteQuestion({ quizId });
  const [title, setTitle] = useState(question.title);

  return (
    <div className="flex items-center gap-2">
      <GhostInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <LoadingButton
        variant="outline"
        size="icon"
        onClick={() =>
          deleteQuestion.mutate({
            params: { path: { id: question.id } },
          })
        }
        isLoading={deleteQuestion.isPending}
      >
        <Trash />
      </LoadingButton>
    </div>
  );
}
