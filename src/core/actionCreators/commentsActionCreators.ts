import * as actions from "../actionTypes/commentsActionTypes";

export function setComments(comments: []): actions.SetCommentsAction {
  return {
    type: actions.SET_COMMENTS,
    comments,
  };
}

export function getComments(): actions.GetCommentsAction {
  return {
    type: actions.GET_COMMENTS,
  };
}

export function getCommentsRequest(): actions.GetCommentsRequestAction {
  return {
    type: actions.GET_COMMENTS_REQUEST,
  };
}

export function getCommentsSuccess(
  comments: []
): actions.GetCommentsSuccessAction {
  return {
    type: actions.GET_COMMENTS_SUCCESS,
    comments,
  };
}

export function getCommentsFailure(
  error: Error | string
): actions.GetCommentsFailureAction {
  return {
    type: actions.GET_COMMENTS_FAILURE,
    error,
  };
}
