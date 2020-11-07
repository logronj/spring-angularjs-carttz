package com.mycart.utils;

import java.util.List;

public interface CommonService<T> {

	public T insert(T entity);
	public T update(T entity);
	public List<T> getAll();
	public T getById(Long id);
	public boolean isExist(String title);
	
}
