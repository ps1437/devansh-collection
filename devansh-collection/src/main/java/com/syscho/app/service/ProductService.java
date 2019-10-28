package com.syscho.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.syscho.app.ProductRepository;
import com.syscho.model.ProductDO;

@Service
public class ProductService {

	@Autowired
	ProductRepository repository;

	public List<ProductDO> getProducts() {
		// TODO Auto-generated method stub
		return null;
	}

	public List<ProductDO> getProductsByName(String prodName) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<ProductDO> getProductsByNumber(String prodNumber) {
		// TODO Auto-generated method stub
		return null;
	}

	public ProductDO delProduct(ProductDO productDO) {
		// TODO Auto-generated method stub
		return null;
	}

	public ProductDO addProduct(ProductDO productDO) {
		// TODO Auto-generated method stub
		return null;
	}

	
}
