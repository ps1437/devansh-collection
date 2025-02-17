import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from "./App";
import { customeTheme } from './assets/style/Theme';
import "./index.css";
import productReducer from './reducers/ProductReducer';
import * as serviceWorker from "./serviceWorker";

const store = createStore(productReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>

  <MuiThemeProvider theme={customeTheme}>
      <App />
  </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
