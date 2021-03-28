import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import { AppState } from "../../../../core/reducers/rootReducer";
import MainPost from "../../../../common/components/MainPost";
import FeaturePost from "../../../../common/components/FeaturePost";

const Body: React.FC = () => {
  const postsState = useSelector((state: AppState) => state.postsReducer.posts);

  return (
    <Grid>
      {postsState.length && <MainPost post={postsState[0]} />}
      <Grid container spacing={4}>
        {postsState.map((post) => (
          <FeaturePost key={post.id} post={post} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Body;
