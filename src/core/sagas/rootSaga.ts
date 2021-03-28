import { all, fork } from "redux-saga/effects";

import PostsSaga from "./postsSaga";
import UsersSaga from "./usersSaga";

export default function* rootSaga() {
  yield all([fork(PostsSaga), fork(UsersSaga)]);
}
