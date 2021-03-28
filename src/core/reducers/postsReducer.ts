import * as actions from "../actionTypes/postsActionTypes";
import { IPost } from "../../common/models/IPost";

export interface PostsState {
  posts: Array<IPost>;
}

const initialState: PostsState = {
  posts: [],
};

export default function postsReducer(
  state: PostsState = initialState,
  action: actions.PostsAction
): PostsState {
  switch (action.type) {
    case actions.SET_POSTS:
    case actions.GET_POSTS_SUCCESS:
      return {
        posts: action.posts,
      };
    default:
      return state;
  }
}
