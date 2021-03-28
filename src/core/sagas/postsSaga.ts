import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import { fetchPosts } from "../services/postsServices";
import * as actionCreators from "../actionCreators/postsActionCreators";
import * as actionTypes from "../actionTypes/postsActionTypes";

function* onLoadPosts() {
  console.log("chegou aqui..");
  try {
    yield put(actionCreators.getPostsRequest());
    const { data } = yield call(fetchPosts);
    yield put(actionCreators.getPostsSuccess(data));
  } catch (error) {
    yield put(actionCreators.getPostsFailure(error.response.data.error));
  }
}

function* watchOnLoadPosts() {
  yield takeEvery(actionTypes.GET_POSTS, onLoadPosts);
}

export default function* postsSaga() {
  yield all([fork(watchOnLoadPosts)]);
}
