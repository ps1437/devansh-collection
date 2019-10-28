package com.syscho.app;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ProductController {

	@RequestMapping("/")
	public String welcome(Map<String, Object> model) {
		model.put("message", "YESY");
		return "index";
	}

}
