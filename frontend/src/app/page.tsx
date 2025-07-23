import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/routes.constants";

export default function Home() {
  return redirect(ROUTES.QuizList);
}
