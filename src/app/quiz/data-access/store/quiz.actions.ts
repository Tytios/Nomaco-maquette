import { createAction, props } from "@ngrx/store";
import { Quiz } from "../models/quiz.interface";

export const getQuizzes = createAction('[Quizzes] Get Quizzes');
export const getQuizzesSuccess = createAction(
  '[Quizzes] Get Quizzes Success',
  props<{quizzes: Quiz[]}>()
  );
export const getQuizzesFailure = createAction(
  '[Quizzes] Get Quizzes Failure',
  props<{error:string}>()
  );
