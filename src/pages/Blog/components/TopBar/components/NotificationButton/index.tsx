import React from "react";

import Typography from "@material-ui/core/Typography";

import { Container } from "./styles";

interface Props {
  selected: boolean;
  handleClick?: Function;
}

const NotificationButton = ({
  selected,
  handleClick = (type: any) => {},
}: Props) => {
  return (
    <Container className={selected ? "active" : ""}>
      <svg id="global-nav-icon--mercado__notifications" height="24" width="24">
        <path d="M13.7 19C13.9 19.3 14 19.6 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 19.6 10.1 19.3 10.3 19H2V18C2 17 2.4 16.1 3.2 15.2L4.2 14H19.9L20.9 15.2C21.7 16.2 22.1 17.1 22.1 18V19H13.7ZM18.2 7.4C17.8 4.3 15.1 2 12 2C8.9 2 6.2 4.3 5.8 7.4L5 13H19L18.2 7.4Z" />
      </svg>

      <Typography variant="caption" display="block" gutterBottom>
        Notificações
      </Typography>
    </Container>
  );
};
export default NotificationButton;
