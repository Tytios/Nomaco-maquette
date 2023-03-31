import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizHomeComponent } from './features/quiz-home/quiz-home.component';

const childRoutes: Routes = [
  { path: '', component: QuizHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
