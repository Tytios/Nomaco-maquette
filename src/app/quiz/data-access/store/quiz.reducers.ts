import { createReducer, on } from "@ngrx/store";
import { QuizStateInterface } from "../models/quizState.interface";
import * as QuizActions from './quiz.actions';

export const initialState: QuizStateInterface = {
  isLoading: false,
  quizzes: [],
  error: null
};

export const reducers = createReducer(initialState,
  on(QuizActions.getQuizzes, (state: QuizStateInterface) => ({
    ...state,
    isLoading: true
  })),
  on(QuizActions.getQuizzesSuccess, (state: QuizStateInterface, action) => ({
    ...state,
    isLoading: false,
    quizzes: action.quizzes
  })),
  on(QuizActions.getQuizzesFailure, (state: QuizStateInterface, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  }))
);
