package com.mycart.repository;

import com.mycart.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepository {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserRepositoryImpl.class);

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public User insert(User entity) {
        entityManager.persist(entity);
        entityManager.flush();
        return entity;
    }

    @Override
    public User update(User entity) {
        entityManager.merge(entity);
        entityManager.flush();
        return entity;
    }

    @Override
    public List<User> getAll() {
        String query = "Select a from User a";
        var typedQuery = entityManager.createQuery(query,User.class);
        return typedQuery.getResultList();
    }

    @Override
    public User getById(Long id) {
        String query = "Select a from User a Where a.id = ?1 ";
        var typedQuery = entityManager.createQuery(query, User.class);
        typedQuery.setParameter(1, id);
        return typedQuery.getSingleResult();
    }

    @Override
    public boolean isExist(String title) {
        String query = "Select (case count(a) > 1 then true else false) from User a Where a.title = ?1 ";
        var typedQuery = entityManager.createQuery(query,Boolean.class);
        return typedQuery.getSingleResult();
    }

    @Override
    public Integer getCount() {
        LOGGER.debug("UserRepository getCount...");
       String query = "Select count(a) from User a";
       var typedQuery = entityManager.createQuery(query,Long.class);
       return typedQuery.getSingleResult().intValue();
    }
}
