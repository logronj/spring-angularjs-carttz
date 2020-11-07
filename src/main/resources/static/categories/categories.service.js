'use strict';
(function () {
    angular.module('myCartApp').factory('CategoryService', ['$http', 'apiConfig', function ($http, apiConfig) {
        const service = {
            getAllCategory: getAllCategory,
            getProductByCategoryId: getProductByCategoryId
        };

        function getAllCategory() {
            return $http.get(apiConfig.API_MYCART_URL_GET_ALL_CATEGORY);
        }

        function getProductByCategoryId(categoryId) {
            return $http.get(apiConfig.API_MYCART_URL_GET_PRODUCT_BY_CATEGORY_ID + categoryId);
        }

        return service;
    }]);
})();