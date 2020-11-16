package com.mycart.repository;

import com.mycart.model.User;
import com.mycart.utils.CommonService;

public interface UserRepository extends CommonService<User> {
    Integer getCount();
}
