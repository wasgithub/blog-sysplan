import React from "react";
import { Switch, Route } from "react-router-dom";

import Blog from "../pages/Blog";

// import { Container } from './styles';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Blog} />
  </Switch>
);

export default Routes;
