import { IUser } from "../../common/models/IUser";

export const GET_USERS = "@usersActionTypes/GET_USERS";
export interface GetUsersAction {
  type: typeof GET_USERS;
}

export const GET_USERS_REQUEST = "@usersActionTypes/GET_USERS_REQUEST";
export interface GetUsersRequestAction {
  type: typeof GET_USERS_REQUEST;
}

export const GET_USERS_SUCCESS = "@usersActionTypes/GET_USERS_SUCCESS";
export interface GetUsersSuccessAction {
  type: typeof GET_USERS_SUCCESS;
  users: [];
}

export const GET_USERS_FAILURE = "@usersActionTypes/GET_USERS_FAILURE";
export interface GetUsersFailureAction {
  type: typeof GET_USERS_FAILURE;
  error: Error | string;
}

//BY_ID
export const GET_USER_BY_ID = "@usersActionTypes/GET_USER_BY_ID";
export interface getUserByIdAction {
  type: typeof GET_USER_BY_ID;
  id: number;
}

export const GET_USER_BY_ID_REQUEST =
  "@usersActionTypes/GET_USER_BY_ID_REQUEST";
export interface GetUserByIdRequestAction {
  type: typeof GET_USER_BY_ID_REQUEST;
  id: number;
}

export const GET_USER_BY_ID_SUCCESS = "@userActionTypes/GET_USER_BY_ID_SUCCESS";
export interface GetUserByIdSuccessAction {
  type: typeof GET_USER_BY_ID_SUCCESS;
  user: IUser;
}

export const GET_USER_BY_ID_FAILURE = "@userActionTypes/GET_USER_BY_ID_FAILURE";
export interface GetUserByIdFailureAction {
  type: typeof GET_USER_BY_ID_FAILURE;
  error: Error | string;
}

export type UsersAction =
  | getUserByIdAction
  | GetUsersAction
  | GetUsersRequestAction
  | GetUsersSuccessAction
  | GetUsersFailureAction
  | getUserByIdAction
  | GetUserByIdRequestAction
  | GetUserByIdSuccessAction
  | GetUserByIdFailureAction;
