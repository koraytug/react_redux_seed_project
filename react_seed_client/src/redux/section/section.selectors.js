import { createSelector } from 'reselect';

const selectSelection = (state) => state.section;

export const selectSections = createSelector(
  [selectSelection],
  (sectionData) => sectionData.sections
);
