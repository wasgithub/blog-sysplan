import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  postsReducer,
  usersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
