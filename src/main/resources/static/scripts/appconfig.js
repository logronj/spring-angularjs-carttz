'use strict';
(function(){
    angular.module('myCartApp').constant('apiConfig',{
        'API_MYCART_URL_GET_ALL_CATEGORY' : '/mycart/category/getAll',
        'API_MYCART_URL_GET_CATEGORY_BY_ID' :'/mycart/category/getById/',
        'API_MYCART_URL_SAVE_CATEGORY' :'/mycart/category/insert',
        'API_MYCART_URL_UPDATE_CATEGORY' :'/mycart/category/update',
        'API_MYCART_URL_GET_CATEGORY_COUNT' : '/mycart/category/count',

        'API_MYCART_URL_GET_ALL_PRODUCTS' : '/mycart/products/getAll',
        'API_MYCART_URL_GET_PRODUCT_BY_ID' :'/mycart/products/getById/',
        'API_MYCART_URL_SAVE_PRODUCT' :'/mycart/products/insert',
        'API_MYCART_URL_UPDATE_PRODUCT' :'/mycart/products/update',
        'API_MYCART_URL_GET_PRODUCT_BY_CATEGORY_ID' : '/mycart/products/getByCategoryId/',
        'API_MYCART_URL_GET_PRODUCT_COUNT' : '/mycart/products/count',

        'API_MYCART_URL_GET_USERS_COUNT' : '/mycart/users/user-count'
    });
})();