import { z } from "zod";

export const CreateQuizSchema = z.object({
  title: z.string().min(1),
});
