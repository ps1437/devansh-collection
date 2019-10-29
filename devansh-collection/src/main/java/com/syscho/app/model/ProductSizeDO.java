package com.syscho.app.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "PRODUCT_SIZE_DETAILS")
public class ProductSizeDO {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;

	@Column(name = "PROD_SIZE")
	private int prodSize;

	public ProductSizeDO(int prodSize) {
		super();
		this.prodSize = prodSize;
	}

	@JsonIgnore

	@ManyToOne(cascade = CascadeType.ALL)

	@JoinColumn(name = "PROD_ID", referencedColumnName = "PROD_ID")
	private ProductDO prodFootSize;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	/*
	 * public String getProdId() { return prodId; }
	 * 
	 * public void setProdId(String prodId) { this.prodId = prodId; }
	 */
	public int getProdSize() {
		return prodSize;
	}

	public void setProdSize(int prodSize) {
		this.prodSize = prodSize;
	}

	public ProductDO getProdFootSize() {
		return prodFootSize;
	}

	public void setProdFootSize(ProductDO prodFootSize) {
		this.prodFootSize = prodFootSize;
	}

	public ProductSizeDO() {
		super();
	}

}
