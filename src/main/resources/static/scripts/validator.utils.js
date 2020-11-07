'use strict';
(function () {
    angular.module('myCartApp').factory('Utilities', ['$rootScope', 'toaster', function ($rootScope, toaster) {
        const self = {

            initialize: function () {

                $rootScope.dataIsNullOrEmpty = function (input) {
                    return (input === 0 ? false : !input || input.length === 0 || /^\s*$/.test(input))
                }
            },

            popSuccess: function (title, body) {
                toaster.pop('success', title, body);
            },

            popInfo: function (title, body) {
                toaster.pop('note', title, body);
            },

            popError: function (title, body) {
                toaster.error(title, body);
            },

            popWarning: function (title, body) {
                toaster.pop('warning', title, body);
            },

            popLoad: function (title, body) {
                toaster.wait(title, body);
            }
        }
        return self;

    }]);
})();