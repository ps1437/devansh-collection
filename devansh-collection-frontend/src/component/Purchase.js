import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { styles } from "../assets/style/styles";
import InputField from "./UI/InputField";
import MultiSelect from "./UI/MultiSelect";

const UI = [
  { key: "prodId", label: "Artical No" },
  { key: "prodName", label: "Artical Name" },
  { key: "prodPrice", label: "Artical Price" },
  { key: "prodSellPrice", label: "Artical Selling Price" }
];

const prodState = {
  prodId: "",
  prodName: "",
  prodPrice: "",
  prodSellPrice: "",
  prodSize: [  ]
};

function Purchase() {
  const productList = useSelector(state => state.data); //this hook gives us redux store state
  const [product, setProduct] = React.useState(prodState);
  const classes = styles();
  const dispatch = useDispatch(); //this hook gives us dispatch method

  const handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    setProduct({ ...product, [name]: value });
  };

  const setProdSize =value =>{
    setProduct({ ...product, 'prodSize':
    [value] });
  }
  function addData(){
    return dispatch => {
      axios.post("http://localhost:9091/product/add",product)
      .then(res =>{
        console.log(res);
        dispatch({
          type: "GET_PRODUCT",
          data: res.data
        })
      }
      );
    }
  }
  const submitForm =event =>{
    event.preventDefault();
    console.log(productList);
  
    dispatch(addData());
  

  }

    
  let uiComponent = UI.map(object => {
    return (
      <InputField
        name={object.key}
        value={product[object.key]}
        width="350px"
        label={object.label}
        onChange={handleChange}
      />
    );
  });
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

          <MultiSelect
          setProdSize={setProdSize}
          size={product.size} />
          <div className="btnCenter">
            <br />
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

export default Purchase;
