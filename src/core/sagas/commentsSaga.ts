import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import { fetchComments } from "../services/commentsServices";
import * as actionCreators from "../actionCreators/commentsActionCreators";
import * as actionTypes from "../actionTypes/commentsActionTypes";

function* onLoadComments() {
  try {
    yield put(actionCreators.getCommentsRequest());
    const { data } = yield call(fetchComments);
    yield put(actionCreators.getCommentsSuccess(data));
  } catch (error) {
    yield put(actionCreators.getCommentsFailure(error.response.data.error));
  }
}

function* watchOnLoadComments() {
  yield takeEvery(actionTypes.GET_COMMENTS, onLoadComments);
}

export default function* commentsSaga() {
  yield all([fork(watchOnLoadComments)]);
}
