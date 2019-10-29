import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    padding: "10px 4px",
  },
  MuiOutlinedInput: {
    input: {
      padding: "10px",
    }
  }
}));

export default function InputField(props) {
  const classes = useStyles();
  return (

    <TextField
      id={props.id}
      className={classes.textField}
      label={props.label}
      onChange={props.onChange}
      margin="normal"
      variant="outlined"
    />

  );
}