import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as QuizActions from './quiz.actions';
import { catchError, map, mergeMap, of } from "rxjs";
import { QuizzesService } from "../services/quizzes.service";

@Injectable()

export class QuizEffects{
  getQuizzes$ = createEffect(
    () => this.actions$.pipe(
      ofType(QuizActions.getQuizzes),
      mergeMap(() => {
        return this.quizService.getQuizzes().pipe(
          map((quizzes) => QuizActions.getQuizzesSuccess({quizzes}),
          catchError((error) => of(QuizActions.getQuizzesFailure({error: error.message}))))
        )
      })
    )
  )

  constructor(private actions$: Actions, private quizService: QuizzesService){}
}
