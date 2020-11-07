'use strict';
(function() {
	var module = angular.module('myCartApp');
	module
			.run(function($rootScope, $window, $location,
					$urlRouter, localStorageService, Utilities) {
                        // $urlRouter.sync();
						// $urlRouter.listen();
						Utilities.initialize();
						

			});

	module.controller("MainController",
			[
					'$rootScope',
					'$state',
					'$location',
					'toaster',
					'$window',
					'$timeout',
					'localStorageService',
				
					function($rootScope, $state, toaster, $window,
							$timeout, localStorageService) {

						var self = this;
					    
						$rootScope.userInfo = {};

						self.showChangePasswordModal = function() {
							self.changePasswordModal = true;
						};

						self.updatePassword = function() {
							MainServices.updatePassword();
							self.logout();
						};

						self.showLogoutModal = function() {
							self.logoutModal = true;
						};

						self.logout = function() {
							$window.sessionStorage.clear();
							$state.go('logout');
							$timeout(function() {
								keycloakAuth.logout("/");
							}, 50);

						}

						self.closeModal = function() {
							self.changePasswordModal = false;
							self.logoutModal = false;
							self.redirectError = false;
							self.errorLogsModal = false;
							$timeout(function() {
								self.gridApi.core.handleWindowResize();
							});
						};

						self.redirectToModule = function(modulepath) {
							$window.location.href = modulepath;
						}

						self.toggleMenu = function() {
							$rootScope.$emit('resizeGrid');
						}

						$rootScope.showErrorLogsModal = function() {
							self.errorLogsModal = true;
							$timeout(function() {
								self.gridApi.core.handleWindowResize();
							}, 300);
							console.log(localStorageService.get('http_errors'));
							self.errorLogsGrid.data = localStorageService.get('http_errors');
						};

						self.refreshErrorLogs = function() {
							$timeout(function() {
								self.gridApi.core.refresh();
							});
						};

						self.errorLogsGrid = {
							paginationPageSizes : [ 5, 10, 15 ],
							paginationPageSize : 5,
							enableColumnMenus : false,
							enableFiltering : false,
							enableSorting : true,
							maxWidth : "100%",
							columnDefs : [ {
								width : '15%',
								field : 'dateTime',
								displayName : 'DATE TIME',
								cellFilter : 'date:\'MM/dd/yyyy hh:mm:ss a\'',
								suppressRemoveSort : true,
								sort : {
									direction : 'asc'
								},
							}, {
								width : '10%',
								field : 'method',
								displayName : 'METHOD',
								suppressRemoveSort : true,
								sort : {
									direction : 'asc'
								},
							}, {
								width : '40%',
								field : 'api',
								displayName : 'API',
								suppressRemoveSort : true,
								sort : {
									direction : 'asc'
								},
							}, {
								width : '10%',
								field : 'status',
								displayName : 'STATUS',
								suppressRemoveSort : true,
								sort : {
									direction : 'asc'
								},
							}, {
								width : '15%',
								field : 'description',
								displayName : 'DESCRIPTION',
								suppressRemoveSort : true,
								sort : {
									direction : 'asc'
								},
							}, {
								width : '10%',
								field : 'action',
								displayName : 'ACTION',
								suppressRemoveSort : true,
								sort : {
									direction : 'asc'
								},
							} ],
							onRegisterApi : function(gridApi) {
								self.gridApi = gridApi;
							}
						};

						$rootScope.$on('refreshMain', function(event, data) {
							console.log('Refresh this page.');
							// self.popInfo(data.header, data.message);
						});

						
				           
						
					} ]);
})();