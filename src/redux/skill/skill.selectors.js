import { createSelector } from "reselect";

const selectSkills = state => state.skillsList;

export const selectSkillsList = createSelector(
  [selectSkills],
  skillsList => skillsList.skills
);
