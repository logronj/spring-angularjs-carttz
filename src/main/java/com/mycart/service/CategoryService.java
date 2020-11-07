package com.mycart.service;

import com.mycart.model.Category;
import com.mycart.utils.CommonService;

public interface CategoryService extends CommonService<Category> {
    Integer getCount();
}
