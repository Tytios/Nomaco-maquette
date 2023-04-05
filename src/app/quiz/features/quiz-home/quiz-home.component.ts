import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as QuizActions from '../../data-access/store/quiz.actions';
import { errorSelector, isLoadingSelector, quizzesSelector } from '../../data-access/store/quiz.selectors';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/models/appState.interface';
import { Quiz } from '../../data-access/models/quiz.interface';

@Component({
  selector: 'app-quiz-home',
  templateUrl: './quiz-home.component.html',
  styleUrls: ['./quiz-home.component.scss']
})
export class QuizHomeComponent implements OnInit{

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  quizzes$: Observable<Quiz[]>;


  constructor(private store: Store<AppStateInterface>){
    this.isLoading$ = this.store.pipe(
      select(isLoadingSelector)
    );
    this.error$ = this.store.pipe(
      select(errorSelector)
    );
    this.quizzes$ = this.store.pipe(
      select(quizzesSelector)
    );
  }

  ngOnInit(): void {
      this.store.dispatch(QuizActions.getQuizzes());
  }

}
