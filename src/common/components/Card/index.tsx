import React from "react";
import { useSelector } from "react-redux";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Paper,
  InputBase,
  Grid,
} from "@material-ui/core";

import SendIcon from "@material-ui/icons/Send";

import CommentContainer from "./components/CommentContainer";
import LikeButton from "./components/LikeButton";
import CommentButton from "./components/CommentButton";
import ShareButton from "./components/ShareButton";
import { AppState } from "../../../core/reducers/rootReducer";
import Header from "./components/Header";

import { getRandomImageUser } from "../../../common/helpers/getRandomImage";
import { orderUser } from "../../../common/helpers/order";

import { Container, useStyles } from "./styles";

const CardItem = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const postsState = useSelector((state: AppState) => state.postsReducer.posts);
  const postsOrder = postsState.sort(orderUser);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Container>
      <Grid container spacing={1}>
        {postsOrder.map((post) => {
          return (
            <Card className={classes.root}>
              <Header userPost={post.userId} />
              <CardMedia
                className={classes.media}
                image={getRandomImageUser()}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body1" color="primary" component="p">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.body}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <LikeButton like={true} onClick={() => {}} />
                <CommentButton onClick={handleExpandClick} />
                <ShareButton onClick={() => {}} />
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Card className={classes.root}>
                  <CardContent className="comment-container">
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>

                    <Paper component="form" className={classes.root}>
                      <InputBase
                        placeholder="Adcione um comentário...."
                        inputProps={{ "aria-label": "search google maps" }}
                        fullWidth
                      />

                      <IconButton aria-label="search">
                        <SendIcon />
                      </IconButton>
                    </Paper>
                  </CardContent>
                  <CommentContainer postId={post.id} />
                </Card>
              </Collapse>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CardItem;
