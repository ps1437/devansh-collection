import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { styles } from "../Styles/style";
import InputField from "./UI/InputField";
//import  AutoSuggestion from  './UI/AutoSuggestion';
import Divider from "@material-ui/core/Divider";

const prodState = {
  prodId: "",
  prodName: "",
  proPrice: "",
  prodSize: [
    {
      prodSize: ""
    }
  ]
};

function Invoice() {
  const [product, setProduct] = React.useState(prodState);
  const classes = styles();

  let handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    setProduct({ ...product, [name]: value });
  };
  return (
    <Container maxWidth="sm">
      <Paper className="paper">
        <Typography variant="h5" className={classes.header}>
          Invoice
        </Typography>
        <Divider />
        <div className={classes.container}>
          <InputField
            id="articalNo"
            name="prodId"
            value={product.prodId}
            label="Artical No:"
            width="350px"
            onChange={handleChange}
          />
          <br />
          <InputField
            id="prodSize"
            name="prodSize"
            value={product.prodSize}
            width="350px"
            label="Selling Price:"
            onChange={handleChange}
          />

          <br />
          <InputField
            id="prodSize"
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
