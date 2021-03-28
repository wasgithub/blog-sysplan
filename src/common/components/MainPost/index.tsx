import React from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

import { IPost } from "../../models/IPost";

interface Props {
  post: IPost;
}

export default function MainFeaturedPost({ post }: Props) {
  const classes = useStyles();

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{
        backgroundImage: `url(${"https://source.unsplash.com/random"})`,
      }}
    >
      <img
        style={{ display: "none" }}
        src={"https://source.unsplash.com/random"}
        alt={post.title}
      />
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.body}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
