import { IUser } from "../../common/models/IUser";
import * as actions from "../actionTypes/usersActionTypes";

//GET USERS
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

//GET USER BY ID
export function getUserById(id: number): actions.getUserByIdAction {
  return {
    type: actions.GET_USER_BY_ID,
    id,
  };
}

export function getUserByIdRequest(
  id: number
): actions.GetUserByIdRequestAction {
  return {
    type: actions.GET_USER_BY_ID_REQUEST,
    id,
  };
}

export function getUserByIdSuccess(
  user: IUser
): actions.GetUserByIdSuccessAction {
  return {
    type: actions.GET_USER_BY_ID_SUCCESS,
    user,
  };
}

export function getUserByIdFailure(
  error: Error | string
): actions.GetUserByIdFailureAction {
  return {
    type: actions.GET_USER_BY_ID_FAILURE,
    error,
  };
}
