import * as actions from "../actionTypes/usersActionTypes";

export function setUsers(users: []): actions.SetUsersAction {
  return {
    type: actions.SET_USERS,
    users,
  };
}

export function getUsers(): actions.GetUsersAction {
  return {
    type: actions.GET_USERS,
  };
}

export function getUsersRequest(): actions.GetUsersRequestAction {
  return {
    type: actions.GET_USERS_REQUEST,
  };
}

export function getUsersSuccess(users: []): actions.GetUsersSuccessAction {
  return {
    type: actions.GET_USERS_SUCCESS,
    users,
  };
}

export function getUsersFailure(
  error: Error | string
): actions.GetUsersFailureAction {
  return {
    type: actions.GET_USERS_FAILURE,
    error,
  };
}
