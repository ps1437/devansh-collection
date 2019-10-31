package com.syscho.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.syscho.app.model.ProductDO;
import com.syscho.app.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository repository;

	public List<ProductDO> getProducts() {
		List<ProductDO> findAll = repository.findAll();
		System.out.println("ProductService.getProducts()" + findAll.size());
		return findAll;
	}

	public List<ProductDO> getProductsByName(String prodName) {
		return repository.findAllByProdName(prodName);
	}

	public List<ProductDO> getProductsByNumber(String prodId) {
		return repository.findAllByProdId(prodId);
	}

	public ProductDO delProduct(ProductDO productDO) {
		repository.deleteById(productDO.getId());
		return null;
	}

	public ProductDO addProduct(ProductDO productDO) {
		return repository.save(productDO);
	}

}
