import axios from "axios";
import React, { useEffect } from "react";
import DataTable from "./UI/DataTable";
import { useDispatch, useSelector } from "react-redux";

const headers = [
  { name: "Product Id", value: "prodId" },
  { name: "Product Name", value: "prodName" },
  { name: "Product Size", value: "prodSize" },
  { name: "Product Price", value: "prodPrice" }
];

function createData(prodId, prodName, prodSize, prodPrice) {
  return { prodId, prodName, prodSize, prodPrice };
}

const rows = [
  createData("VKC010", "VKC", "6,7,8,9", 280),
  createData("VKC010", "VKC", "6,7,8,9", 280),
  createData("VKC010", "VKC", "6,7,8,9", 280),
  createData("VKC010", "VKC", "6,7,8,9", 280),
  createData("VKC010", "VKC", "6,7,8,9", 280),
  createData("VKC010", "VKC", "6,7,8,9", 280),
  createData("VKC010", "VKC", "6,7,8,9", 280)
];

function Product(props) {
  const productList = useSelector(state => state.data); //this hook gives us redux store state
  const dispatch = useDispatch(); //this hook gives us dispatch method

  // useEffect(() => {
  //   axios.get("http://localhost:9091/product/view").then(res => {
  //     setData(res.data);
  //   });
  // }, []);
  useEffect(() => {
    dispatch(getData());
  }, []);

  function getData() {
    return dispatch => {
      axios.get("http://localhost:9091/product/view")
      .then(res =>
        dispatch({
          type: "GET_PRODUCT",
          data: res.data
        })
      );
    };
  }


  function onFetchdata() {
    //invoking action
  dispatch(getData());
}


  if (productList) {
    console.log(productList);
    return <DataTable rowsData={productList} headers={headers} />;
  } else {
    return <div>Loading.....</div>;
  }
}

export default Product;
