import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Link } from "react-router-dom";
export const logo = require("../../image/logo.png");

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appbar: { width: "90%", margin: "auto" },

  link: {
    display: "block",
    padding: "15px",
    color: "white",
    fontSize: "20px",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  logo: {
    padding: "5px 4px"
  }
}));
const link = [
  { link: "/home", name: "Home" },
  { link: "/invoice", name: "Sell" },
  { link: "/purchase", name: "Purchase" }
];

export default function NavBar() {
  const classes = useStyles();

  const navbar = link.map(object => {
    return (
      <Link to={object.link} className={classes.link}>
       
        | {object.name} 
      </Link>
    );
  });
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <span className={classes.logo}>
            <img src={logo} alt="logo" height="60" width="212" />
          </span>
          {navbar}
        </Toolbar>
      </AppBar>
    </div>
  );
}
