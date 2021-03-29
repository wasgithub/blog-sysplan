import React from "react";

import Typography from "@material-ui/core/Typography";
import { Container } from "./styles";

interface Props {
  onClick: () => void;
}

const CommentButton = ({ onClick = () => {} }: Props) => {
  return (
    <Container onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="currentColor"
        width="24"
        height="24"
        focusable="false"
      >
        <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z" />
      </svg>
      <Typography variant="caption" display="block" gutterBottom>
        Compartilhar
      </Typography>
    </Container>
  );
};
export default CommentButton;
