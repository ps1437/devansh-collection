import axios from "axios";
import React, { useEffect } from "react";
import DataTable from "./UI/DataTable";

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
  createData("VKC010", "VKC", "6,7,8,9", 280),
  createData("VKC010", "VKC", "6,7,8,9", 280)
];

function Product(props) {
  const [productList, setData] = React.useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:9091/product/view").then(res => {
      setData(res.data);
    });
  }, []);

  if (productList.length>0) {
    return <DataTable rowsData={productList} headers={headers} />;
  } else {
    return <div>Loading.....</div>;
  }
}

export default Product;
