import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import SendIcon from "@material-ui/icons/Send";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import PhotoButton from "./components/PhotoButton";
import WriteArticleButton from "./components/WriteArticleButton";

import "./styles.scss";
import { Container } from "./styles";
const NewPost = () => {
  return (
    <Container>
      <Card className="pb-2">
        <CardContent className="comment-container">
          <Avatar aria-label="recipe">R</Avatar>

          <Paper component="form">
            <InputBase
              placeholder="Adcione uma descrição...."
              inputProps={{ "aria-label": "search google maps" }}
              fullWidth
            />

            <IconButton aria-label="search">
              <SendIcon />
            </IconButton>
          </Paper>
        </CardContent>

        <CardActions className="comment-actions">
          <PhotoButton /> <WriteArticleButton />
        </CardActions>
      </Card>
    </Container>
  );
};

export default NewPost;
