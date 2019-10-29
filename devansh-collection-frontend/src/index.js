import './index.css';

import * as serviceWorker from './serviceWorker';

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const customeTheme = createMuiTheme({
    palette: {
      primary: { main: '#389bde' },
      secondary: { main: '#db2534' },
  
    },
    overrides: {
        MuiOutlinedInput: {
           
            input:{
                padding:"10px"
    
            }
        },
      MuiButton: {
        containedPrimary: {
          color: '#fff',
          width: 'auto',
          fontSize: '11px',
          padding: ".55em 1.02em .7em",
          marginLeft: ".5em",
          backgroundColor: '#389bb5',
          borderRadius: '5px',
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0,0,0,0.24), 0px 3px 1px -2px rgba(0,0,0,0.02)',
        }
      }
      
    }
  }); 
ReactDOM.render(
     <div>
      <MuiThemeProvider theme={customeTheme}>
        <App />
       </MuiThemeProvider>
    </div> 
 , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
