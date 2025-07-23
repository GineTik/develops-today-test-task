"use client";

import { publicClient } from "@/services/instances";

export function useQuizzes() {
  return publicClient.useQuery("get", "/quizzes");
}
