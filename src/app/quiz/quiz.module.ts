import { NgModule } from '@angular/core';
import { QuizRoutingModule } from 'src/app/quiz/quiz-routing.module';
import { QuizHomeComponent } from 'src/app/quiz/features/quiz-home/quiz-home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [QuizHomeComponent],
  imports: [QuizRoutingModule, SharedModule],
  providers: [],
})
export class QuizzModule {}
