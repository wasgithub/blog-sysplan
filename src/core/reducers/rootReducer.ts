import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import commentsReducer from "./commentsReducer";

const rootReducer = combineReducers({
  postsReducer,
  usersReducer,
  commentsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
