package com.syscho.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.syscho.app.service.ProductService;

@Controller
public class NavbarController {

	@Autowired
	ProductService service;

	@GetMapping(value = { "/", "/home" })
	public String home() {
		return "index";
	}

	@GetMapping("/admin")
	public String adminPage() {
		return "admin";
	}

	@GetMapping("/product")
	public String product() {
		return "product";
	}

}
