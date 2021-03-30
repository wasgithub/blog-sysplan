import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import { Container } from "./styles";
import StackAvatars from "../../../../common/components/stack-avatars";
import { avatars } from "./helpers/mockAvatars";

interface Props {
  onSeach?: Function;
}

const ChatBox = ({ onSeach = (text: any) => {} }: Props) => {
  return (
    <Container>
      <aside>
        <header>
          <input type="text" placeholder="Encontrar amigos" />
          <Box py={2}>
            <Grid container>
              <StackAvatars {...avatars} />
            </Grid>
            <Grid container>
              <Box py={1}>
                <Typography component="span">+10 amigos online</Typography>
              </Box>
            </Grid>
          </Box>
        </header>
        <ul>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status orange" />
                offline
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_03.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status orange" />
                offline
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_07.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status green" />
                online
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_08.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status green" />
                online
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_09.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status green" />
                online
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_10.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status orange" />
                offline
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_08.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status green" />
                online
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_09.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status green" />
                online
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_10.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status orange" />
                offline
              </h3>
            </div>
          </li>
        </ul>
      </aside>
    </Container>
  );
};
export default ChatBox;
