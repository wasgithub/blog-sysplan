import * as actions from "../actionTypes/usersActionTypes";
import { IUser } from "../../common/models/IUser";

export interface UsersState {
  users: Array<IUser>;
  user?: IUser | {};
}

const initialState: UsersState = {
  users: [],
  user: {},
};

export default function postsReducer(
  state: UsersState = initialState,
  action: actions.UsersAction
): UsersState {
  switch (action.type) {
    case actions.GET_USERS_SUCCESS:
      return {
        users: action.users,
      };
    case actions.GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}
