import * as actions from "../actionTypes/usersActionTypes";
import { IUser } from "../../common/models/IUser";

export interface UsersState {
  users: Array<IUser>;
}

const initialState: UsersState = {
  users: [],
};

export default function postsReducer(
  state: UsersState = initialState,
  action: actions.UsersAction
): UsersState {
  switch (action.type) {
    case actions.SET_USERS:
    case actions.GET_USERS_SUCCESS:
      return {
        users: action.users,
      };
    default:
      return state;
  }
}
