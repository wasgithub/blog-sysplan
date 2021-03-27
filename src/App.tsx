import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import Routes from "./routes";
import GlobalStyles from "./styles/globals";
import theme from "./styles/themeMU";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
