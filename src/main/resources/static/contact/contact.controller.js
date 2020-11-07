'use strict';
(function () {
    angular.module('myCartApp').controller('ContactController', ['$rootScope', function ($rootScope) {
        let self = this;
        self.helloContactPage = 'Hello World Contact Page';
        console.log(self.helloContactPage);
    }]);
})();

