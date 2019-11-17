import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Invoice from "./component/Invoice";
import Product from "./component/Product";
import Purchase from "./component/Purchase";
import NavBar from "./component/UI/NavBar";

function App() {
  return (
    <div>
      {" "}
      <Router basename={process.env.REACT_APP_ROUTER_BASE||''}>
        <NavBar />
        <br />
        <Switch>
          <Route path="/" exact={true} component={Product} />        
          <Route path="/purchase" exact={true} component={Purchase} />
          <Route path="/invoice" exact={true} component={Invoice} />
          <Route path="/home" exact={true} component={Product} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
