import React from "react";
import { Grid, Typography } from "@material-ui/core";

import Search from "@material-ui/icons/Search";

import { Container } from "./styles";
import { Box } from "@material-ui/core";
const MainSearchBar = () => {
  return (
    <Container>
      <Grid container alignItems="center">
        <Grid item>
          <Grid item container alignItems="center">
            <Grid item>
              <Typography variant="h5">BLOG</Typography>
            </Grid>
            <Box px={2}>|</Box>
            <Grid item>
              <img
                src="https://industrial.airliquide.com.br/sites/industry_br/files/logos/air-liquide_0_0.png"
                alt={"AirLiquid"}
                style={{ paddingRight: 16 }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <div className="search-input ml-1">
            <Search />
            <input type="text" placeholder="Pesquisar" />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default MainSearchBar;
