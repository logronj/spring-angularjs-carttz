'use strict';
(function () {
    angular.module('myCartApp').controller('CategoriesController', ['CategoryService', function (CategoryService) {

        const self = this;

        CategoryService.getAllCategory().then(function (response) {
            console.log(response.data);
            self.categories = response.data;
            self.getProducts(self.categories[0].categoryId);
        })

        self.getProducts = (id) => {
            CategoryService.getProductByCategoryId(id).then(function (response) {
                self.products = response.data;
            })
        }

    }]);
})();