import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "../ui/dialog";
import { FormInput } from "../ui/form-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateQuiz } from "@/hooks/use-create-quiz";
import { LoadingButton } from "../ui/loading-button";
import { Form } from "../ui/form";
import { CreateQuizSchema } from "@/models/quiz";

type CreateQuizFormProps = {
  children: React.ReactNode;
};

export function CreateQuizForm({ children }: CreateQuizFormProps) {
  const createQuiz = useCreateQuiz();

  const form = useForm({
    defaultValues: {
      title: "Untitled Quiz",
    },
    resolver: zodResolver(CreateQuizSchema),
  });

  const submit = form.handleSubmit((data) => {
    createQuiz.mutate({
      body: {
        title: data.title,
      },
    });
  });

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Quiz</DialogTitle>
        </DialogHeader>

        <DialogDescription>
          Create a new quiz to start the quiz creation process.
        </DialogDescription>

        <Form {...form}>
          <form onSubmit={submit} className="space-y-2">
            <FormInput
              name="title"
              label="Title"
              placeholder="Untitled Quiz"
              control={form.control}
            />
            <LoadingButton
              type="submit"
              onClick={submit}
              isLoading={createQuiz.isPending}
              className="w-full"
            >
              Create Quiz
            </LoadingButton>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
