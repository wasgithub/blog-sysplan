import React, { useEffect } from "react";
import { Container, Box, Typography, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header";
import Copyright from "../../common/components/Copyright";
import MainPost from "../../common/components/MainPost";
import FeaturePost from "../../common/components/FeaturePost";

import { getPosts } from "../../core/actionCreators/postsActionCreators";
import { AppState } from "../../core/reducers/rootReducer";

const featuredPosts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

const Blog: React.FC = () => {
  const dispatch = useDispatch();
  const postsState = useSelector((state: AppState) => state.posts);
  console.log("postsState", postsState);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

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
        </Grid>
        {!!featuredPosts.length && <MainPost post={featuredPosts[0]} />}
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturePost key={post.id} post={post} />
          ))}
        </Grid>
      </Box>
      <Copyright />
    </Container>
  );
};

export default Blog;
