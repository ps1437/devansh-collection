import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    width: 350,
    padding: "10px 4px",
    float: "right",
    marginRight: "20%"
  },
  MuiOutlinedInput: {
    input: {
      padding: "10px"
    }
  }
}));

export default function SearchBar(props) {
  const classes = useStyles();
  return (
    <TextField
      className={classes.textField}
      placeholder="Search...."
      value={props.value}
      onChange={props.handleChange}
      margin="normal"
      variant="outlined"
    />
  );
}
