package com.syscho.app;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.syscho.app.model.ProductDO;
import com.syscho.app.model.ProductSizeDO;
import com.syscho.app.repository.ProductRepository;

@SpringBootApplication
@ComponentScan(basePackages = { "com.syscho.app.*" })
@EnableJpaRepositories(basePackages = { "com.syscho.app.repository" })
@EntityScan("com.syscho.app.model")
@CrossOrigin(origins = "*")
public class MainApplication extends SpringBootServletInitializer implements CommandLineRunner {

	@Autowired
	ProductRepository repo;

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(MainApplication.class);
	}

	public static void main(String[] args) throws Exception {
		SpringApplication.run(MainApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		ProductDO prod = new ProductDO();
		prod.setProdSellPrice(100L);
		prod.setProdId("1");
		prod.setProdName("VKV");
		prod.setProdPrice(2000L);
		Set<ProductSizeDO> productSizeDO = new HashSet<>();
		;
		productSizeDO.add(new ProductSizeDO(6));
		productSizeDO.add(new ProductSizeDO(8));
		prod.setProductSizeDO(productSizeDO);
		;

		repo.save(prod);

	}

}
