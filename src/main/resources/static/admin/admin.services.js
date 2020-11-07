'use strict';
(function(){
    angular.module('myCartApp').factory('AdminServices',['$http','apiConfig',function($http,apiConfig){
        const service = {
            saveProduct : saveProduct,
            saveCategory : saveCategory,
            getCategories : getCategories
        }

        function saveProduct(file,requestBody) {
            const formData = new FormData();
            formData.append('file',file);
            formData.append('title',requestBody.title);
            formData.append('description',requestBody.description);
            formData.append('price',requestBody.price);
            formData.append('quantity',requestBody.quantity);
            formData.append('category', requestBody.category.categoryId);

            return $http.post(
                apiConfig.API_MYCART_URL_SAVE_PRODUCT, formData, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            });
        }

        function saveCategory(requestBody){
            return $http.post(apiConfig.API_MYCART_URL_SAVE_CATEGORY, requestBody);
        }

        function getCategories(){
            return $http.get(apiConfig.API_MYCART_URL_GET_ALL_CATEGORY);
        }

        return service;
    }]);
})();