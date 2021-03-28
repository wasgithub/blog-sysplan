import * as actions from "../actionTypes/postsActionTypes";

export function setPosts(posts: []): actions.SetPostsAction {
  return {
    type: actions.SET_POSTS,
    posts,
  };
}

export function getPosts(): actions.GetPostsAction {
  return {
    type: actions.GET_POSTS,
  };
}

export function getPostsRequest(): actions.GetPostsRequestAction {
  return {
    type: actions.GET_POSTS_REQUEST,
  };
}

export function getPostsSuccess(posts: []): actions.GetPostsSuccessAction {
  return {
    type: actions.GET_POSTS_SUCCESS,
    posts,
  };
}

export function getPostsFailure(
  error: Error | string
): actions.GetLyricsFailureAction {
  return {
    type: actions.GET_POSTS_FAILURE,
    error,
  };
}
