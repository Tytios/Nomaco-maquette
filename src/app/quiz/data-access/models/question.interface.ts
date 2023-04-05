import { Answer } from "./answer.interface";

export interface Question {
  id: string;
  label: string;
  possibleAnswers: Answer[];
  goodAnswers: Answer[];
}
