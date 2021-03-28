import * as actions from "../actionTypes/postsActionTypes";

export interface PostsState {
  posts?: [];
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
