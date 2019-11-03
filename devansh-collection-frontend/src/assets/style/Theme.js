import { createMuiTheme } from "@material-ui/core/styles";

export const customeTheme = createMuiTheme({
    palette: {
      primary: { main: "#389bde" },
      secondary: { main: "#db2534" }
    },
    overrides: {
      MuiOutlinedInput: {
        input: {
          padding: "10px"
        }
      },
      MuiTable:{
        root:{
          width:'80%',
          margin:'auto'
        }
      },
      MuiTableCell:{
        root:{
          lineHeight:'0.6rem'
        }
      },
      MuiButton: {
        containedPrimary: {
          color: "#fff",
          width: "120px",
          fontSize: "13px",
          padding: ".55em 1.02em .7em",
          backgroundColor: "#389bb5",
          borderRadius: "5px",
          boxShadow:
            "0px 1px 2px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0,0,0,0.24), 0px 3px 1px -2px rgba(0,0,0,0.02)"
        }
      }
    }
  });