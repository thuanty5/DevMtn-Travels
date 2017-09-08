angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('home',{
                url:'/',
                // template: "<p>testing</p>",
                templateUrl: "../views/about.html",
                // controller: ""
            })

            
            .state('contact',{
                url:'/contact',
                // template: "<p>testing</p>",
                templateUrl: "../views/contact.html",
                controller: "mainCtrl"
            })



            .state('locations',{
                url:'/locations',
                // template: "<p>testing</p>",
                templateUrl: "../views/locations.html",
                // controller: ""
            }).state("packages",{
                url:'/packages',
                // template: "<p>testing</p>",
                templateUrl: "../views/packages.html",
                // controller: ""
            }).state('about',{
                url:'/about',
                // template: "<p>testing</p>",
                templateUrl: "../about-advanturers/.html",
                // controller: ""
            })

       
    });

