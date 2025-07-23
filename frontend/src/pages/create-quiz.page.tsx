"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useQuiz } from "@/hooks/use-quiz";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CreateQuestionButtons } from "@/components/quiz/question-forms/create-question-buttons";
import { QuestionForm } from "@/components/quiz/question-forms/question-form";

export default function QuizCreatePage() {
  const params = useParams<{ id: string }>();
  const quiz = useQuiz({ id: params?.id });
  const router = useRouter();

  if (!params?.id) {
    return <div>Loading... </div>;
  }

  return (
    <Container size="xl" className="py-10">
      <Button className="mb-5" variant="link" onClick={() => router.back()}>
        <ArrowLeft />
        Back
      </Button>

      <h1>{quiz.data?.title}</h1>

      <div className="divide-y *:py-5 *:m-0">
        {quiz.data?.questions.map((question) => (
          <>
            <QuestionForm
              key={question.id}
              question={question}
              quizId={params.id}
            />
            {params?.id && <CreateQuestionButtons quizId={params.id} />}
          </>
        ))}

        {quiz.data?.questions.length === 0 && (
          <div className="flex flex-col gap-4">
            <span className="text-muted-foreground">No questions yet</span>
            {params?.id && <CreateQuestionButtons quizId={params.id} />}
          </div>
        )}
      </div>
    </Container>
  );
}
