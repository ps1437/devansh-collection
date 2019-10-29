package com.syscho.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.syscho.app.model.ProductDO;

@Repository
public interface ProductRepository extends JpaRepository<ProductDO, Long> {

	List<ProductDO> findAllByProdName(String prodName);

	List<ProductDO> findAllByProdId(String prodId);

}
