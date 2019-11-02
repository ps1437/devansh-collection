import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { styles } from '../Styles/style';
import InputField from "./UI/InputField";
import MultiSelect from "./UI/MultiSelect";
import Divider from "@material-ui/core/Divider";

const UI =[{'value':'product.prodId','label':'Artical No','name':'prodPrice'},
            {'value':'product.prodName','label':'Artical Name','name':'prodName'},
            {'value':'product.prodPrice','label':'Artical Price','name':'prodPrice'},
          
            {'value':'product.prodSellPrice','label':'Artical Selling Price','name':'prodSellPrice'}];

const prodState = {
  prodId: "",
  prodName: "",
  prodPrice: "",
  prodSellPrice: "",

  prodSize: [
    {
      prodSize: ""
    }
  ]
};

function Purchase() {
  const [product, setProduct] = React.useState(prodState);
  const classes = styles();

  let handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    setProduct({ ...product, [name]: value });
  };
  let uiComponent =UI.map(object =>{
                          return (<InputField
                          name={object.name}
                          value={object.value}
                          width="350px"
                          label={object.label}
                          onChange={handleChange}
                          />)});
  return (
    <Container maxWidth="sm">
      <Paper className="paper">
        <Typography variant="h5" className={classes.header}>
          Devash Collections
        </Typography>
        <Divider />

        <div className={classes.container}>
        {uiComponent}
          <br />

          <MultiSelect size={product.size} />
          <div className="btnCenter">
            <br/>
            <Button
              variant="contained"
              color="primary"
              style={{ justifyContent: "center" }}
            >
              Submit
            </Button>{" "}
          </div>
        </div>
      </Paper>
    </Container>
  );
}

export default Purchase;
