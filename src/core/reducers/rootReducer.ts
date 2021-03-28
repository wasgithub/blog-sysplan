import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
  postsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
