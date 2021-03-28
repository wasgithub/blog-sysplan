import { all, fork } from "redux-saga/effects";

import PostsSaga from "./postsSaga";
import UsersSaga from "./usersSaga";
import CommentsSaga from "./commentsSaga";

export default function* rootSaga() {
  yield all([fork(PostsSaga), fork(UsersSaga), fork(CommentsSaga)]);
}
