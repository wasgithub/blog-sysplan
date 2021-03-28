import React from "react";
import clsx from "clsx";
import { Grid, Typography } from "@material-ui/core";

import { useStyles } from "./styles";

interface IProps {
  subtitle: string;
  disableGutter: boolean;
  titleVariant: string;
}

const Header = ({ subtitle, disableGutter }: IProps) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      data-aos={"fade-up"}
      className={clsx(classes.root, disableGutter ? classes.disableGutter : {})}
    >
      <Grid item xs={12}>
        <Typography className={classes.title}>
          Descubra as novidades da{" "}
        </Typography>
        <Typography className={classes.title} color="primary">
          {" "}
          Air Liquide.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h4"
          align="left"
          color="textSecondary"
          gutterBottom
        >
          {subtitle}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
