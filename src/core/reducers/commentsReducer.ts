import * as actions from "../actionTypes/commentsActionTypes";
import { IComments } from "../../common/models/IComments";

export interface CommentsState {
  comments: Array<IComments>;
}

const initialState: CommentsState = {
  comments: [],
};

export default function postsReducer(
  state: CommentsState = initialState,
  action: actions.CommentsAction
): CommentsState {
  switch (action.type) {
    case actions.SET_COMMENTS:
    case actions.GET_COMMENTS_SUCCESS:
      return {
        comments: action.comments,
      };
    default:
      return state;
  }
}
