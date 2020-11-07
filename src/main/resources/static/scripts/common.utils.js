'use strict';

(function () {
    var module = angular.module('myCartApp').factory(
        'CommonUtils',
        ['toaster',
            function (toaster) {
                return {
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
                    },

                    clearToasters: function () {
                        toaster.clear();
                    },

                    formatTelNo: function (officeTelNo) {
                        officeTelNo = officeTelNo.replace(/\-/g, '');
                        let areaCode = "(" + officeTelNo.substring(0, 3) + ")";
                        let telNo = officeTelNo.substring(3, 6) + "-" + officeTelNo.substring(6, 10);
                        return areaCode.concat(telNo);
                    }
                }

            }]);
})();