import { createSelector } from "reselect";

const selectProject = state => state.projects;

export const selectProjects = createSelector(
  [selectProject],
  projects => projects.project
);
