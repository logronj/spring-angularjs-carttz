package com.mycart.service;

import com.mycart.model.User;
import com.mycart.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User insert(User entity) {
        return userRepository.insert(entity);
    }

    @Override
    public User update(User entity) {
        return userRepository.update(entity);
    }

    @Override
    public List getAll() {
        return userRepository.getAll();
    }

    @Override
    public User getById(Long id) {
        return userRepository.getById(id);
    }

    @Override
    public boolean isExist(String title) {
        return userRepository.isExist(title);
    }

    @Override
    public Integer getCount() {
        return userRepository.getCount();
    }
}
