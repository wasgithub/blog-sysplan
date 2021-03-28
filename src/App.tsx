import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import configureStore from "./core/store/configureStore";
import Routes from "./routes";
import GlobalStyles from "./styles/globals";
import theme from "./styles/themeMU";

const store = configureStore();

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </Provider>
);

export default App;
