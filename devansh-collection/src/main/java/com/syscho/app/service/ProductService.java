package com.syscho.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.syscho.app.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository repository;

}
