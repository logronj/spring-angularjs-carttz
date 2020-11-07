package com.mycart.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.mycart.model.Product;
import com.mycart.model.User;
import com.mycart.utils.CommonService;
import com.mycart.utils.ProductRequestWrapper;

public interface ProductService extends CommonService<Product>{

	public List<Product> getByCategoryId(Long id);

	public Product insert(MultipartFile file, ProductRequestWrapper productWrapper) throws IOException;

}
