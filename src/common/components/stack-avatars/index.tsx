import React, { memo } from "react";
import clsx from "clsx";
import { Box, Avatar, Tooltip, Typography } from "@material-ui/core";

import { useStyles } from "./styles";

export interface Props {
  avatars?: Array<{
    src?: string;
    alt: string;
    disabled?: boolean;
  }>;
  className?: string;
  limit?: number;
  toolTip?: string;
}

function StackAvatars({
  avatars = [],
  className,
  limit = 3,
  toolTip = "",
}: Props) {
  const classes = useStyles();
  let lastIndex = 0;

  const avatarNodes = avatars.slice(0, limit).map((item) => (
    <Tooltip key={++lastIndex} title={item?.alt ?? ""}>
      <Avatar
        role="visible-avatar"
        src={item.src}
        className={clsx(
          classes.avatar,
          { [classes.noImage]: !item.src },
          { [classes.fadedImage]: item.disabled }
        )}
      >
        {item.alt?.trimLeft()?.charAt(0)}
      </Avatar>
    </Tooltip>
  ));

  if (avatars.length > limit) {
    avatarNodes.push(
      <Avatar
        key={++lastIndex}
        className={clsx(classes.avatar, classes.more)}
        role="hidden-avatar"
      >
        <Typography
          color="inherit"
          variant="subtitle2"
          className={classes.avatarText}
        >
          +{avatars.length - limit}
        </Typography>
      </Avatar>
    );
  }

  return <Box className={clsx(classes.root, className)}>{avatarNodes}</Box>;
}

export default memo(StackAvatars);
