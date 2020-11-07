package com.mycart.service;

import java.io.IOException;
import java.util.List;

import com.mycart.exceptions.AlreadyExistException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.mycart.exceptions.ApiErrorDetail;
import com.mycart.exceptions.FileSizeExceededException;
import com.mycart.model.Category;
import com.mycart.model.Product;
import com.mycart.repository.ProductRepository;
import com.mycart.utils.CommonUtils;
import com.mycart.utils.ProductRequestWrapper;

@Service
public class ProductServiceImpl implements ProductService {

	private static final Logger LOGGER = LoggerFactory.getLogger(ProductServiceImpl.class);

	@Autowired
	private ProductRepository productRepository;

	@Override
	@Transactional(rollbackFor = Exception.class)
	public Product insert(MultipartFile file, ProductRequestWrapper productWrapper) throws IOException {
		LOGGER.debug("Saving file: ", file.getOriginalFilename());

		if (isExist(productWrapper.getTitle())) throw new AlreadyExistException("Product Already Exist");

		var product = buildProduct(file, productWrapper);
		try {
			return productRepository.insert(product);
		} catch (FileSizeExceededException e) {
			throw new FileSizeExceededException(new ApiErrorDetail(
					"File Size Limit Exceeded : " + CommonUtils.bytesToMeg(file.getSize()) + " Allowed Limit is 2MB"));
		}
	}

	@Override
	public Integer getCount() {
		return productRepository.getCount();
	}

	private Product buildProduct(MultipartFile file, ProductRequestWrapper productWrapper) throws IOException {
		var category = new Category(productWrapper.getCategory());
		var product = new Product(productWrapper.getTitle(),productWrapper.getDescription(),productWrapper.getPrice(),
				productWrapper.getQuantity(),category,file.getBytes());
		return product;
	}

	@Override
	@Transactional
	public Product update(Product entity) {
		return productRepository.update(entity);
	}

	@Override
	public List<Product> getAll() {
		return productRepository.getAll();
	}

	@Override
	public Product getById(Long id) {
		return productRepository.getById(id);
	}

	@Override
	public boolean isExist(String title) {
		return productRepository.isExist(title);
	}

	@Override
	public List<Product> getByCategoryId(Long id) {
		return productRepository.getByCategoryId(id);
	}

	@Override
	public Product insert(Product entity) {
		// TODO Auto-generated method stub
		return null;
	}

}
