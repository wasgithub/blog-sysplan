import * as actions from "../actionTypes/postsActionTypes";

export interface PostPros {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface PostsState {
  posts: Array<PostPros>;
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
