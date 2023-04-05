import { Question } from "./question.interface";

export interface Quiz {
  id: string;
  title:string;
  questions: Question[];
}
