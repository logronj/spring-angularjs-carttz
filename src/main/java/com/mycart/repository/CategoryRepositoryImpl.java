package com.mycart.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.mycart.model.Category;

@Repository
public class CategoryRepositoryImpl implements CategoryRepository {

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public Category insert(Category entity) {
		entityManager.persist(entity);
		entityManager.flush();
		return entity;
	}

	@Override
	public Category update(Category entity) {
		entityManager.merge(entity);
		entityManager.flush();
		return entity;
	}

	@Override
	public List<Category> getAll() {
		String query = "Select a from Category a";
		var typedQuery = entityManager.createQuery(query,Category.class);
		return typedQuery.getResultList();
	}

	@Override
	public Category getById(Long id) {
		String query = "Select a from Category a WHERE a.id = ?1";
		var typedQuery = entityManager.createQuery(query,Category.class);
		typedQuery.setParameter(1, id);
		return typedQuery.getSingleResult();
	}

	@Override
	public boolean isExist(String title) {
		String query = "Select case when count(a) > 0 then true else false END from Category a " +
				"WHERE UPPER(a.title) = UPPER(?1)";
		var typedQuery = entityManager.createQuery(query,Boolean.class);
		typedQuery.setParameter(1, title);
		return typedQuery.getSingleResult();
	}

    @Override
    public Integer getCount() {
        String query = "Select count(a) from Category a";
        var typedQuery = entityManager.createQuery(query,Long.class);
        return typedQuery.getSingleResult().intValue();
    }
}
