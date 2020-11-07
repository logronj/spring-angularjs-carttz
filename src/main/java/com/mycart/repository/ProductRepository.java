package com.mycart.repository;

import java.util.List;

import com.mycart.model.Product;
import com.mycart.model.User;
import com.mycart.utils.CommonService;

public interface ProductRepository extends CommonService<Product> {

	public List<Product> getByCategoryId(Long id);
    Integer getCount();
}
