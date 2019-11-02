import { Switch } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../component/HomePage";
import Product from "../component/Product";

export const Routers = (
  <Switch>
    <Route path="/" exact={true} component={Product} />
    <Route path="/home" exact={true} component={Product} />
  </Switch>
);
