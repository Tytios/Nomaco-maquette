import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/appState.interface";

export const selectorFeature = (state: AppStateInterface) => state.quizzes;

export const isLoadingSelector = createSelector(selectorFeature,
  (state) => state.isLoading
);
export const quizzesSelector = createSelector(selectorFeature,
  (state) => state.quizzes
);
export const errorSelector = createSelector(selectorFeature,
  (state) => state.error
);
