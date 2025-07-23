class Routes {
  QuizList = "/quizzes";
  QuizDetails = (id: string) => `/quizzes/${id}`;
  QuizCreate = (id: string) => `/create/${id}`;
}

export const ROUTES = new Routes();
