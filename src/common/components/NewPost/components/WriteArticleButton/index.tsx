import React from "react";

import Typography from "@material-ui/core/Typography";
import { Container } from "./styles";
const WriteArticleButton = ({ onClick = () => {} }) => {
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
        <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z" />
      </svg>
      <Typography variant="caption" display="block" gutterBottom>
        Escrever artigo
      </Typography>
    </Container>
  );
};
export default WriteArticleButton;
