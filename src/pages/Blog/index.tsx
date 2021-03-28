import React, { useEffect } from "react";
import { Container, Box, Typography, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import Copyright from "../../common/components/Copyright";

import { getPosts } from "../../core/actionCreators/postsActionCreators";
import { getUsers } from "../../core/actionCreators/usersActionCreators";
import { getComments } from "../../core/actionCreators/commentsActionCreators";

const Blog: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
    dispatch(getComments());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Blog - AirLiquide
        </Typography>
        <Grid item xs={12} data-aos={"fade-up"}>
          <Header
            subtitle="Quem tem informação tem poder."
            disableGutter
            titleVariant="h3"
          />
          <Body />
        </Grid>
      </Box>
      <Copyright />
    </Container>
  );
};

export default Blog;
