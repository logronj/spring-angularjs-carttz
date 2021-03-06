package com.mycart.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.mycart.model.Product;

@Repository
public class ProductRepositoryImpl implements ProductRepository {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Product insert(Product entity) {
		 entityManager.persist(entity);
		 entityManager.flush();
		 return entity;
	}

	@Override
	public Product update(Product entity) {
		entity = entityManager.merge(entity);
		entityManager.flush();
		return entity;
	}

	@Override
	public List<Product> getAll() {
		String query = "Select a from Product a";
		var typedQuery = entityManager.createQuery(query,Product.class);
		return typedQuery.getResultList();
	}

	@Override
	public Product getById(Long id) {
		return entityManager.find(Product.class, id);
	}

	@Override
	public boolean isExist(String title) {
		String query = "Select CASE when(count(a) > 0) then true else false END from Product a " +
				"WHERE UPPER(a.title) = UPPER(?1)";
		var typedQuery = entityManager.createQuery(query,Boolean.class);
		typedQuery.setParameter(1,title);
		return typedQuery.getSingleResult();
	}

	@Override
	public List<Product> getByCategoryId(Long id) {
		String query = "Select a from Product a WHERE a.category.id = ?1";
		var typedQuery = entityManager.createQuery(query,Product.class);
		typedQuery.setParameter(1, id);
		return typedQuery.getResultList();
	}

	@Override
	public Integer getCount() {
		String query = "Select count(a) from Product a";
		var typedQuery = entityManager.createQuery(query,Long.class);
		return typedQuery.getSingleResult().intValue();
	}


}
