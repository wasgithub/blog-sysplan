import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import { fetchUsers } from "../services/usersServices";
import * as actionCreators from "../actionCreators/usersActionCreators";
import * as actionTypes from "../actionTypes/usersActionTypes";

function* onLoadUsers() {
  try {
    yield put(actionCreators.getUsersRequest());
    const { data } = yield call(fetchUsers);
    yield put(actionCreators.getUsersSuccess(data));
  } catch (error) {
    yield put(actionCreators.getUsersFailure(error.response.data.error));
  }
}

function* watchOnLoadUsers() {
  yield takeEvery(actionTypes.GET_USERS, onLoadUsers);
}

export default function* usersSaga() {
  yield all([fork(watchOnLoadUsers)]);
}
