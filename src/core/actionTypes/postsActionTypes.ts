export const SET_POSTS = "@postsActionTypes/SET_POSTS";
export interface SetPostsAction {
  type: typeof SET_POSTS;
  posts: [];
}

export const GET_POSTS = "@postsActionTypes/GET_POSTS";
export interface GetPostsAction {
  type: typeof GET_POSTS;
}

export const GET_POSTS_REQUEST = "@postsActionTypes/GET_POSTS_REQUEST";
export interface GetPostsRequestAction {
  type: typeof GET_POSTS_REQUEST;
}

export const GET_POSTS_SUCCESS = "@postsActionTypes/GET_POSTS_SUCCESS";
export interface GetPostsSuccessAction {
  type: typeof GET_POSTS_SUCCESS;
  posts: [];
}

export const GET_POSTS_FAILURE = "@postsActionTypes/GET_POSTS_FAILURE";
export interface GetLyricsFailureAction {
  type: typeof GET_POSTS_FAILURE;
  error: Error | string;
}

export type PostsAction =
  | SetPostsAction
  | GetPostsAction
  | GetPostsRequestAction
  | GetPostsSuccessAction
  | GetLyricsFailureAction;
