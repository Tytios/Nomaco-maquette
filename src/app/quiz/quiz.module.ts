import { NgModule } from '@angular/core';
import { QuizRoutingModule } from 'src/app/quiz/quiz-routing.module';
import { QuizHomeComponent } from 'src/app/quiz/features/quiz-home/quiz-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './data-access/store/quiz.reducers';
import { EffectsModule } from '@ngrx/effects';
import { QuizEffects } from './data-access/store/quiz.effects';

@NgModule({
  declarations: [QuizHomeComponent],
  imports: [
    QuizRoutingModule,
    SharedModule,
    StoreModule.forFeature('quizzes', reducers),
    EffectsModule.forFeature([QuizEffects])],
  providers: [],
})
export class QuizzModule {}
