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
				let usersCount = AdminServices.getUsersCount();

				$q.all([product, category, usersCount]).then((response) => {
					self.productCount = response[0].data;
					self.categoryCount = response[1].data;
					self.usersCount = response[2].data;
				})
			}

			self.getCategories = () => {
				AdminServices.getCategories().then((response) => {
					self.categoryList = response.data;
					console.log(self.categoryList);
				}).catch(function (e) {
					Utilities.popError(e.data.message);
				})
			}

			self.saveCategory = () => {
				if (addCategoryValid()) {
					AdminServices.saveCategory(self.category).then((response) => {
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
					AdminServices.saveProduct(self.file, self.product).then((response) => {
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

			self.closeUserModal = () => {
				$('#viewUsersModal').modal('hide');
			}
			self.closeViewProductModal = () => {
				$('#viewProductsModal').modal('hide');
			}


			/*------------------------USER PAGE------------------------*/
			self.userGrid = {

				paginationPageSizes: [5, 10, 15],
				paginationPageSize: 5,
				enableFiltering: false,
				enableColumnMenus: false,
				columnDefs: [
					{
						field: 'index',
						width: 90,
						name: '',
						enableSorting: false,
						headerCellTemplate: "<div class='text-center pt-1 pb-1 hide-sort'> ",
						cellTemplate: "<div class='text-center pt-1 pb-1'> "
							+ "<input type='checkbox' ng-model='row.entity.checked' "
							+ "ng-click = 'grid.appScope.ctrl.onSelectUser(row.entity)' /></div>",
					},
					{
						enableSorting: false,
						field: 'id',
						visible: false,
						width: 0

					},
					{
						enableSorting: true,
						field: 'firstName',
						name: 'First Name',
						width: 200

					},
					{
						enableSorting: true,
						field: 'lastName',
						name: 'Last Name'
					},
					{
						enableSorting: false,
						field: 'userName',
						width: 150,
						name: 'User Name'

					},
					{
						enableSorting: false,
						field: 'userType',
						width: 150,
						name: 'User Type'

					}],

				onRegisterApi: function (gridApi) {
					self.userGridApi = gridApi;

				},
				data: [{
					firstName : 'janel',
					lastName : 'logrono',
					userName : 'logronj',
					userType : 'admin'
				}]
			};

			self.productsGrid = {

				paginationPageSizes: [5, 10, 15],
				paginationPageSize: 5,
				enableFiltering: false,
				enableColumnMenus: false,
				columnDefs: [
					{
						field: 'index',
						width: 90,
						name: '',
						enableSorting: false,
						headerCellTemplate: "<div class='text-center pt-1 pb-1 hide-sort'> ",
						cellTemplate: "<div class='text-center pt-1 pb-1'> "
							+ "<input type='checkbox' ng-model='row.entity.checked' "
							+ "ng-click = 'grid.appScope.ctrl.onSelectProduct(row.entity)' /></div>",
					},
					{
						enableSorting: false,
						field: 'productId',
						visible: false,
						width: 0

					},
					{
						enableSorting: true,
						field: 'title',
						name: 'Title',
						width: 200

					},
					{
						enableSorting: true,
						field: 'description',
						name: 'Description'
					},
					{
						enableSorting: false,
						field: 'price',
						width: 150,
						name: 'Price'

					},
					{
						enableSorting: false,
						field: 'quantity',
						width: 100,
						name: 'Quantity'

					},
					{
						enableSorting: false,
						field: 'category',
						width: 100,
						name: 'Category'

					}],

				onRegisterApi: function (gridApi) {
					self.productsGridApi = gridApi;

				},
				data: [{
					title : 'test',
					description : 'test',
					price : 4500,
					quantity : 1,
					category: 'Laptop'
				}]
			};

			initPage();


}]);
}) ();