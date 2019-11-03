package com.syscho.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.syscho.app.model.ProductDO;
import com.syscho.app.service.ProductService;

@RestController

@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/product")
public class ProductController {

	@Autowired
	ProductService service;

	@PostMapping("/add")
	public ProductDO addProduct(@RequestBody ProductDO productDO) {
		return service.addProduct(productDO);
	}

	@PostMapping("/delete")
	public ProductDO delProduct(@RequestBody ProductDO productDO) {
		return service.delProduct(productDO);
	}

	@GetMapping("/view/by/name/{prodNumber}")
	public List<ProductDO> getProductsByNumber(@PathVariable("prodNumber") String prodNumber) {
		return service.getProductsByNumber(prodNumber);
	}

	@GetMapping("/view/by/number/{prodName}")
	public List<ProductDO> getProducts(@PathVariable("prodName") String prodName) {
		return service.getProductsByName(prodName);
	}

	@GetMapping("/view")
	public List<ProductDO> getProducts() {
		return service.getProducts();
	}

}
