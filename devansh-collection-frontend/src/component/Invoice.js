import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { styles } from "../assets/style/styles";
import InputField from "./UI/InputField";
import  Autocomplete from  './UI/AutoComplete';
import Divider from "@material-ui/core/Divider";

const prodState = {
  prodId: "",
  // prodName: "",
  // prodPrice: "",
  prodSellPrice: "",
  prodSize: ""
  
};

function Invoice() {
  const [product, setProduct] = React.useState(prodState);
  const classes = styles();

  const handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    setProduct({ ...product, [name]: value });
  };
  const setArtical =(value)=>{
       setProduct({ ...product, 'prodId': value });
  }

  const submitForm=event =>{
    console.log(product)
  }
  return (
    <Container maxWidth="sm">
      <Paper className="paper">
        <Typography variant="h5" className={classes.header}>
          Invoice
        </Typography>
        <Divider />
        
        <div className={classes.container}>
        <Autocomplete
        setArtical={setArtical}
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands"
        ]}
      />
          {/* <InputField
            id="articalNo"
            name="prodId"
            value={product.prodId}
            label="Artical No:"
            width="350px"
            onChange={handleChange}
          />
          <br /> */}
          <InputField
            name="prodSellPrice"
            value={product.prodSellPrice}
            width="350px"
            label="Selling Price:"
            onChange={handleChange}
          />

          <br />
          <InputField
            name="prodSize"
            value={product.prodSize}
            label="Artical Size:"
            width="350px"
            onChange={handleChange}
          />

          <div className="btnCenter">
            <Button
              variant="contained"
              color="primary"
              onClick={submitForm}
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

export default Invoice;
