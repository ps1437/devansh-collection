import React from "react";
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

function Product(){
    return (
        <DataTable rowsData={rows} headers={headers} />
    );
  
}

export default Product;
