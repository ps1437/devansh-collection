import { Switch } from "./node_modules/@material-ui/core";
import React from "./node_modules/react";
import { Route } from "./node_modules/react-router-dom";
import HomePage from "../component/HomePage";
import Product from "../component/Product";

export const Routers = (
  <Switch>
    <Route path="/" exact={true} component={Product} />
    <Route path="/home" exact={true} component={Product} />
  </Switch>
);
