import React from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Button, Typography } from "@material-ui/core";
import "./styles.scss";
import { Container } from "./styles";

import StackAvatars from "../../components/stack-avatars";
import { avatars } from "./helpers/mockAvatars";
import { AppState } from "../../../core/reducers/rootReducer";
import { getRandomImageUser } from "../../../common/helpers/getRandomImageUser";

const FeedIdentity = () => {
  const imageUserLoged = getRandomImageUser();
  const userState = useSelector((state: AppState) => state.usersReducer.user);
  return (
    <Container>
      <div className="card-identity grid__column">
        <div className="card card--user-profile">
          <div className="card--user-profile__cover" />
          <div className="card-body">
            <figure className="avatar avatar--online mb-3">
              <div className="avatar__thumbnail">
                <img
                  className="avatar__image"
                  src={imageUserLoged}
                  alt={userState?.name}
                />
              </div>
              <figcaption className="avatar__meta">
                <h5 className="avatar__title js-user-name">
                  {userState?.name ?? "Washington Alexandre"}
                </h5>
                <Typography>{userState?.company.bs}</Typography>
                <Box mt={1}>
                  <Typography variant="caption">Email </Typography>
                  <Typography>
                    {userState?.email ?? "was.alexandre42@gmail.com"}
                  </Typography>
                </Box>
                <Box mt={1}>
                  <Typography variant="caption">Empresa </Typography>
                  <Typography>
                    {userState?.company.name ?? "Air Liquide"}
                  </Typography>
                </Box>
              </figcaption>
            </figure>
            <Grid container>
              <Box py={2}>
                <StackAvatars {...avatars} />
              </Box>
            </Grid>

            <Grid container>
              <Button variant="outlined" color="primary">
                Convidar
              </Button>
            </Grid>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeedIdentity;
