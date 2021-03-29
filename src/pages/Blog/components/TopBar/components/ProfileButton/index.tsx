import React from "react";
import Typography from "@material-ui/core/Typography";

import { Container } from "./styles";

interface Props {
  selected?: boolean;
  handleClick?: Function;
  profile?: string;
}

const ProfileButton = ({ profile }: Props) => {
  return (
    <Container>
      <img src={profile} alt="Eu" />

      <Typography variant="caption" display="block" gutterBottom>
        Eu
      </Typography>
    </Container>
  );
};
export default ProfileButton;
