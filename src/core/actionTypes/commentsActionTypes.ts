export const SET_COMMENTS = "@commentsActionTypes/SET_COMMENTS";
export interface SetCommentsAction {
  type: typeof SET_COMMENTS;
  comments: [];
}

export const GET_COMMENTS = "@commentsActionTypes/GET_COMMENTS";
export interface GetCommentsAction {
  type: typeof GET_COMMENTS;
}

export const GET_COMMENTS_REQUEST = "@commentsActionTypes/GET_COMMENTS_REQUEST";
export interface GetCommentsRequestAction {
  type: typeof GET_COMMENTS_REQUEST;
}

export const GET_COMMENTS_SUCCESS = "@commentsActionTypes/GET_COMMENTS_SUCCESS";
export interface GetCommentsSuccessAction {
  type: typeof GET_COMMENTS_SUCCESS;
  comments: [];
}

export const GET_COMMENTS_FAILURE = "@commentsActionTypes/GET_COMMENTS_FAILURE";
export interface GetCommentsFailureAction {
  type: typeof GET_COMMENTS_FAILURE;
  error: Error | string;
}

export type CommentsAction =
  | SetCommentsAction
  | GetCommentsAction
  | GetCommentsRequestAction
  | GetCommentsSuccessAction
  | GetCommentsFailureAction;
