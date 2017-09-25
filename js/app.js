angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html",
                controller: "mainCtrl"
            })
            .state('contact',{
                url:'/contact',
                templateUrl: "../views/contact.html",
                controller: "mainCtrl"
            })
            .state('about',{
                url:'/about',
                templateUrl: "../views/about-adventurers.html",
                controller: "mainCtrl"
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "../views/locations.html",
                controller: "locationsCtrl"
            })
            .state('packages',{
                url:'/packages',
                templateUrl: "../views/packages.html",
                controller: "packagesCtrl"
            })
            .state('packagesCountry', {
                url: '/packages/:country',
                templateUrl: '../views/packages.html',
                controller: 'packagesCtrl'
            })
            .state('booked', {
                url: '/booked/:id',
                templateUrl: '../views/booked.html',
                controller: 'bookedCtrl'
            })
    });