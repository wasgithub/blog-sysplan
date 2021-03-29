import React from "react";
import { useSelector } from "react-redux";

import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Hidden,
  Paper,
} from "@material-ui/core";

import { IPost } from "../../models/IPost";
import { AppState } from "../../../core/reducers/rootReducer";
import { useStyles } from "./styles";

interface Props {
  post: IPost;
}

const FeaturedPost = ({ post }: Props) => {
  const commentsState = useSelector(
    (state: AppState) => state.commentsReducer.comments
  );
  const classes = useStyles();

  const commentsFiltered = commentsState.filter(
    (comment) => comment.postId === post.id
  );

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.body}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continuar lendo...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={`https://picsum.photos/id/${
                Math.floor(Math.random() * (100 - 1)) + 1
              }/200/300`}
              title={post.title}
            />
          </Hidden>
        </Card>
        {commentsFiltered.map((comment) => (
          <Grid container spacing={1}>
            <Paper>{comment.body}</Paper>
          </Grid>
        ))}
      </CardActionArea>
    </Grid>
  );
};

export default FeaturedPost;
