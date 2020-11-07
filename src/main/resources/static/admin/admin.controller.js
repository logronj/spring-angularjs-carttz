'use strict';
(function () {
	angular.module('myCartApp').controller('AdminController', ['AdminServices', '$rootScope', 'Utilities', '$q',
		function (AdminServices, $rootScope, Utilities, $q) {
			const self = this;
			self.category = {};
			self.product = {};
			self.showAddCategoryErrorMessage = false;
			self.showAddProductErrorMessage = false;
			const invalid = 'invalid';

			const initPage = () => {
			    let product = AdminServices.getProductCount();
			    let category = AdminServices.getCategoryCount();

			    $q.all([product,category]).then(function(response){
			        self.productCount = response[0].data;
			        self.categoryCount = response[1].data;
			    })
			}

			self.getCategories = () =>{
				 AdminServices.getCategories().then(function(response){
					self.categoryList = response.data;
					console.log(self.categoryList);
				}).catch(function(e){
					Utilities.popError(e.data.message);
				})
			}

			self.saveCategory = () => {
				if (addCategoryValid()) {
					AdminServices.saveCategory(self.category).then(function (response) {
                        self.closeCategoryModal();
						Utilities.popSuccess('Successfully saved Category');
						self.categoryCount++;
					}).catch(function (e) {
						Utilities.popError(e.data.message);
					})
				} else {
					self.showAddCategoryErrorMessage = true;
				}
			}

			self.saveProduct = () => {
				if (addProductValid()) {
					AdminServices.saveProduct(self.file,self.product).then(function (response) {
					    self.closeProductModal();
						Utilities.popSuccess('successfully saved Product');
						self.productCount++;
					}).catch(function (e) {
						Utilities.popError(e.data.message);
					})
				} else {
					self.showAddProductErrorMessage = true;
				}
			}

			const addCategoryValid = () => {
				return (!$rootScope.dataIsNullOrEmpty(self.category.title)
					&& !$rootScope.dataIsNullOrEmpty(self.category.description));
			}

			const addProductValid = () => {
				return (!$rootScope.dataIsNullOrEmpty(self.product.title)
					&& !$rootScope.dataIsNullOrEmpty(self.product.description)
					&& !$rootScope.dataIsNullOrEmpty(self.product.quantity)
					&& !$rootScope.dataIsNullOrEmpty(self.product.price)
					&& !$rootScope.dataIsNullOrEmpty(self.product.category)
					&& !$rootScope.dataIsNullOrEmpty(self.file)
					&& self.file != invalid);
			}

			self.closeProductModal = () => {
			    self.product = {};
			    self.file = null;
                self.showAddProductErrorMessage = false;
			    $('#addProductModal').modal('hide');
			}

			self.closeCategoryModal = () => {
			    self.category = {};
			    self.showAddCategoryErrorMessage = false;
			    $('#addCategoryModal').modal('hide');
			}

			initPage();

		}]);
})();