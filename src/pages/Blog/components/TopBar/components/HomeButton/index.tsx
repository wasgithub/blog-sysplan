import React from "react";

import Typography from "@material-ui/core/Typography";

import { Container } from "./styles";

interface Props {
  selected?: boolean;
}

const HomeButton = ({ selected }: Props) => {
  return (
    <Container className={selected ? "active" : ""}>
      <svg id="global-nav-icon--mercado__home--active" height="24" width="24">
        <path d="m23 9v2h-2v7c0 1.7-1.3 3-3 3h-4v-6h-4v6h-4c-1.7 0-3-1.3-3-3v-7h-2v-2l11-7z" />
        <path d="m20 2h-3v3.2l3 1.9z" />
      </svg>

      <Typography variant="caption" display="block" gutterBottom>
        Início
      </Typography>
    </Container>
  );
};
export default HomeButton;
