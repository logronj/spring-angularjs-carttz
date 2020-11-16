package com.mycart.utils;

import java.util.List;

public interface CommonService<T> {

	T insert(T entity);
	T update(T entity);
	List<T> getAll();
	T getById(Long id);
	boolean isExist(String title);
	
}
