import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

import { Container } from "./styles";

interface Props {
  id?: number;
  thumb?: any;
  time?: any;
  name?: any;
  body?: any;
  like?: any;
  reply?: any;
  onLike?: any;
  onReply?: any;
  onDelete?: any;
}
const Comment = ({
  id,
  thumb,
  time,
  name,
  body,
  like,
  reply,
  onLike = (like: boolean) => {},
  onReply = (commentId: number, reply: string) => {},
  onDelete = (commentId: number) => {},
}: Props) => {
  return (
    <Container>
      <Avatar aria-label="recipe" className="comment-thumb" src={thumb} />
      <div className="comment-area">
        <Card component="form">
          <CardContent>
            <div className="comment-header">
              <div>
                <Typography color="textSecondary" component="p">
                  {name}
                </Typography>
                <Typography color="textSecondary" className="comment-time">
                  {time}
                </Typography>
              </div>
              <IconButton onClick={() => onDelete(id)}>
                <DeleteOutlineIcon />
              </IconButton>
            </div>
            <Typography variant="body2" component="p">
              {body}
            </Typography>
          </CardContent>
        </Card>
        <CardActions className="comment-actions">
          <Typography
            variant="caption"
            display="block"
            className={like && "comment-liked"}
            onClick={() => onLike(id)}
          >
            Gostei
          </Typography>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            onClick={() => onReply(id, "comment")}
          >
            Responder
          </Typography>
        </CardActions>
      </div>
    </Container>
  );
};

export default Comment;
