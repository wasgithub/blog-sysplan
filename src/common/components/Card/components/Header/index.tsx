import React from "react";
import { useSelector } from "react-redux";
import { CardHeader, Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { useStyles } from "../../styles";
import { AppState } from "../../../../../core/reducers/rootReducer";

interface Props {
  userPost: number;
}

const Header = ({ userPost }: Props) => {
  const usersState = useSelector((state: AppState) => state.usersReducer.users);
  const user = usersState.find((user) => user.id === userPost);
  const classes = useStyles();
  return (
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          {user?.name?.trimLeft()?.charAt(0)}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={user?.name}
      subheader="September 14, 2016"
    />
  );
};

export default Header;
