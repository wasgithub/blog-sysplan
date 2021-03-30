import React from "react";
import { useSelector } from "react-redux";

import Comment from "../Comment";
import { CardActions, Typography } from "@material-ui/core";

import { AppState } from "../../../../../core/reducers/rootReducer";

interface Props {
  postId: Number;
}

const CommentContainer = ({ postId }: Props) => {
  const commentsState = useSelector(
    (state: AppState) => state.commentsReducer.comments
  );
  const commentsFiltered = commentsState?.filter(
    (comment) => comment.postId === postId
  );

  console.log(commentsFiltered);

  return (
    <>
      {commentsFiltered.slice(0, 3).map((comment) => (
        <Comment
          like={true}
          name={comment.name}
          time={new Date().toLocaleDateString()}
          thumb="https://miro.medium.com/max/1838/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          body={comment.body}
        />
      ))}
      <CardActions className="comment-actions">
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          onClick={() => {}}
        >
          mais comentários
        </Typography>
      </CardActions>
    </>
  );
};

export default CommentContainer;
