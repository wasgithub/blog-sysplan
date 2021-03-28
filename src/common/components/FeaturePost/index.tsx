import React from "react";

import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Hidden,
} from "@material-ui/core";

import { IPropsPost } from "../../models/IPropsPost";

import { useStyles } from "./styles";

const FeaturedPost = ({ post }: IPropsPost) => {
  const classes = useStyles();

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
              image={"https://source.unsplash.com/random"}
              title={post.title}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default FeaturedPost;
