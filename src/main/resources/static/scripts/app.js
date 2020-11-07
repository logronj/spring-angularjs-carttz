'use strict';
/**
 * @ngdoc overview
 * @name myCartApp
 * @description # myCartApp
 * 
 * Main module of the application.
 */

angular.module(
    'myCartApp',
    ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize',
        'ngTouch', 'ngModal', 'ui.router', 'ui.bootstrap', 'ui.grid',
        'ui.grid.edit', 'ui.grid.cellNav', 'ui.grid.autoResize', 'ui.utils.masks',
        'ui.grid.grouping', 'angular-momentjs', 'ngFileSaver', 'appdirectives',
        'ngImageInputWithPreview', 'angularFileUpload', 'angular.filter',
        'ui.grid.pagination', 'angular.filter',
        'LocalStorageModule', 'ui.grid.exporter', 'toaster']).config(
            [
                '$stateProvider',
                '$urlRouterProvider',
                '$locationProvider',
                'localStorageServiceProvider',
                function ($stateProvider, $urlRouterProvider,
                    $locationProvider, localStorageServiceProvider) {

                    localStorageServiceProvider.setPrefix('myCartApp')
                        .setStorageType('sessionStorage')
                        .setNotify(true, true)
                    // For unmatched routes
                    $urlRouterProvider.otherwise('/');

                    $stateProvider
                        .state('mycart', {
                            url: '/',
                            templateUrl: 'main/main.html',
                            controller: 'MainController',
                            controllerAs: 'mainCtrl'
                        }).state('mycart.categories', {
                            url: 'categories',
                            templateUrl: 'categories/categories.html',
                            controller: 'CategoriesController',
                            controllerAs: 'categoriesCtrl'
                        }).state('mycart.contact', {
                            url: 'contact',
                            templateUrl: 'contact/contact.html',
                            controller: 'ContactController',
                            controllerAs: 'contactCtrl'
                        }).state('mycart.login', {
                            url: 'login',
                            templateUrl: 'login/login.html',
                            controller: 'LoginController',
                            controllerAs: 'loginCtrl'
                        }).state('mycart.admin', {
                            url: 'admin',
                            templateUrl: 'admin/admin.html',
                            controller: 'AdminController',
                            controllerAs: 'adminCtrl'
                        }).state('mycart.about', {
                            url: 'about',
                            templateUrl: 'about/about.html',
                            controller: 'AboutController',
                            controllerAs: 'aboutCtrl'
                        })

                    $locationProvider.html5Mode(true);
                    // $urlRouterProvider.deferIntercept();
                }]);
