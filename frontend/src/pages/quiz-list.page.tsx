"use client";

import { QuizCard } from "@/components/quiz/quiz-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuizzes } from "@/hooks/use-quizzes";
import { Container } from "@/components/ui/container";
import { CreateQuizForm } from "@/components/quiz/create-quiz-form";
import { Button } from "@/components/ui/button";

export default function QuizListPage() {
  const quizzes = useQuizzes();

  return (
    <Container className="py-4">
      <div className="flex justify-between items-center">
        <h1>Quiz List</h1>
        <CreateQuizForm>
          <Button>Create Quiz</Button>
        </CreateQuizForm>
      </div>

      <div className="flex flex-wrap gap-4">
        {quizzes.data?.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}

        {quizzes.isLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="size-50" />
          ))}
      </div>

      {quizzes.data?.length === 0 && (
        <span className="text-muted-foreground">No quizzes found</span>
      )}
    </Container>
  );
}
