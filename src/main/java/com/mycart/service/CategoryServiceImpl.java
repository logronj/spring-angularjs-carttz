package com.mycart.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mycart.exceptions.TitleAlreadyExistException;
import com.mycart.model.Category;
import com.mycart.repository.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;
	
	
	@Override
	@Transactional
	public Category insert(Category entity) {
		if(isExist(entity.getTitle())) throw new TitleAlreadyExistException("Category Already Exist");
		return categoryRepository.insert(entity);
	}

	@Override
	@Transactional
	public Category update(Category entity) {
		return categoryRepository.update(entity);
	}

	@Override
	public List<Category> getAll() {
		return categoryRepository.getAll();
	}

	@Override
	public Category getById(Long id) {
		return categoryRepository.getById(id);
	}

	@Override
	public boolean isExist(String title) {
		return categoryRepository.isExist(title);
	}

}
