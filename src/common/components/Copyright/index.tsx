import React from "react";
import { Typography, Link } from "@material-ui/core";

const Copyright: React.FC = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="https://www.airliquide.com/pt-br/brasil">
      airliquide
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

export default Copyright;
