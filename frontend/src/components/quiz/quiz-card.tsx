"use client";

import { ApiSchemas } from "@/services/types";
import { Button } from "../ui/button";
import { Pencil, Trash } from "lucide-react";
import { toast } from "sonner";
import { useDeleteQuiz } from "@/hooks/use-delete-quiz";
import Link from "next/link";
import { ROUTES } from "@/lib/routes.constants";
type QuizCardProps = {
  quiz: ApiSchemas["GetShortQuizDto"];
};

export function QuizCard({ quiz }: QuizCardProps) {
  const deleteQuiz = useDeleteQuiz();

  return (
    <div className="size-50 bg-muted rounded-lg p-2 flex flex-col justify-between">
      <h3 className="text-lg font-bold">{quiz.title}</h3>
      <div className="flex gap-2">
        <Button
          className="flex-1"
          onClick={() => toast.warning("Preview not implemented")}
        >
          Preview
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link href={ROUTES.QuizCreate(quiz.id)}>
            <Pencil />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            deleteQuiz.mutate({
              params: { path: { id: quiz.id } },
            })
          }
        >
          <Trash />
        </Button>
      </div>
    </div>
  );
}
