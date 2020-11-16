package com.mycart.service;

import com.mycart.model.User;
import com.mycart.utils.CommonService;

public interface UserService extends CommonService<User> {
    Integer getCount();
}
