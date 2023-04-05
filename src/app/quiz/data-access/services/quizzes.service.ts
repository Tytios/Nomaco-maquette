import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.interface';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor() { }

  getQuizzes(): Observable < Quiz[] > {
    const fakeQuizzes: Quiz[] = [{
      id: 'QUIZ001',
      title: 'This is the first Quiz',
      questions: [{
          id: 'QUE001',
          label: 'This is a first question',
          possibleAnswers: [{
              id: 'ANS001',
              label: 'The A answer'
            },
            {
              id: 'ANS002',
              label: 'The B answer'
            },
            {
              id: 'ANS003',
              label: 'The C answer'
            },
            {
              id: 'ANS004',
              label: 'The D answer'
            }
          ],
          goodAnswers: [{
            id: 'ANS004',
            label: 'The D answer'
          }]
        },
        {
          id: 'QUE002',
          label: 'This is a second question',
          possibleAnswers: [{
              id: 'ANS005',
              label: 'The A answer'
            },
            {
              id: 'ANS006',
              label: 'The B answer'
            },
            {
              id: 'ANS007',
              label: 'The C answer'
            },
            {
              id: 'ANS008',
              label: 'The D answer'
            }
          ],
          goodAnswers: [{
            id: 'ANS008',
            label: 'The D answer'
          }]
        }
      ]
    }];
    return of(fakeQuizzes).pipe(delay(2000));
  }

}
