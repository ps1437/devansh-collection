package com.syscho.app.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "PRODUCT_DETAILS")
public class ProductDO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5118890271824295199L;

	public ProductDO() {
		super();
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;
	@Column(name = "PROD_ID")
	private String prodId;

	@Column(name = "PROD_NAME")
	private String prodName;

	@Column(name = "PROD_PRICE")
	private Long prodPrice;

	@Column(name = "PROD_SELL_PRICE")
	private Long prodSellPrice;

	@OneToMany(mappedBy = "prodFootSize", cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	private Set<ProductSizeDO> productSizeDO;

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Set<ProductSizeDO> getProductSizeDO() {
		return productSizeDO;
	}

	public void setProductSizeDO(Set<ProductSizeDO> productSizeDO) {
		this.productSizeDO = productSizeDO;
	}

	public String getProdId() {
		return prodId;
	}

	public void setProdId(String prodId) {
		this.prodId = prodId;
	}

	public String getProdName() {
		return prodName;
	}

	public void setProdName(String prodName) {
		this.prodName = prodName;
	}

	public Long getProdPrice() {
		return prodPrice;
	}

	public void setProdPrice(Long prodPrice) {
		this.prodPrice = prodPrice;
	}

	public Long getProdSellPrice() {
		return prodSellPrice;
	}

	public void setProdSellPrice(Long prodSellPrice) {
		this.prodSellPrice = prodSellPrice;
	}

}
