import { Quiz } from "./quiz.interface";

export interface QuizStateInterface {
  isLoading: boolean;
  quizzes: Quiz[];
  error: string | null;
}
