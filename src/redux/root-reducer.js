import { combineReducers } from "redux";
import skillReducer from "./skill/skill.reducer";
import projectReducer from "./projects/projects.reducer";

const rootReducer = combineReducers({
  skillsList: skillReducer,
  projects: projectReducer
});

export default rootReducer;
