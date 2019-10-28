package com.syscho.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "PRODUCT_DETAILS")
public class ProductDO {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String product_id;
	private String product_name;
	private Long product_purchase_price;

	private Long product_quantity;
	private String product_size;
	private String product_selling_price;

	public Long getProduct_quantity() {
		return product_quantity;
	}

	public void setProduct_quantity(Long product_quantity) {
		this.product_quantity = product_quantity;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProduct_id() {
		return product_id;
	}

	public void setProduct_id(String product_id) {
		this.product_id = product_id;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public Long getProduct_purchase_price() {
		return product_purchase_price;
	}

	public void setProduct_purchase_price(Long product_purchase_price) {
		this.product_purchase_price = product_purchase_price;
	}

	public String getProduct_size() {
		return product_size;
	}

	public void setProduct_size(String product_size) {
		this.product_size = product_size;
	}

	public String getProduct_selling_price() {
		return product_selling_price;
	}

	public void setProduct_selling_price(String product_selling_price) {
		this.product_selling_price = product_selling_price;
	}

}
