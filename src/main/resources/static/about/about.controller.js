'use strict';
(function(){
	angular.module('myCartApp').controller('AboutController',['$rootScope','$state',function($rootScope,$state){
		const self = this;
		self.helloAboutPage = 'Hello About Page';
	}]);
})();