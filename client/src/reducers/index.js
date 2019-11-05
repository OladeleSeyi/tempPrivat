import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import projectsReducer from "./projectsReducer";
import tasksReducer from "./tasksReducer";
import stateReducer from "./stateReducer";

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	states: stateReducer,
	projects: projectsReducer,
	tasks: tasksReducer
});
