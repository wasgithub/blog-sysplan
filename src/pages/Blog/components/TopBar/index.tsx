import React from "react";

import MainSearchBar from "./components/MainSearchBar";
import HomeButton from "./components/HomeButton";
import MyNetworkButton from "./components/MyNetworkButton";
import MessageButton from "./components/MessageButton";
import NotificationButton from "./components/NotificationButton";

import { Container } from "./styles";
const TopBar = () => {
  return (
    <Container className="container p-0 d-flex justify-content-between align-items-center">
      <MainSearchBar />

      <div className="d-flex">
        <HomeButton />
        <MyNetworkButton selected={true} />
        <MessageButton />
        <NotificationButton selected={true} />
      </div>
    </Container>
  );
};
export default TopBar;
