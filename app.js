// this will be the javascript file to hold all of the code for my first app
// create the angular module
//this places the code in a sort of container so that name collision can be avoided
(function () {
    'use strict';
    var myApp = angular.module('app', ['ionic', 'App.Controllers'])

    myApp.config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /home
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "views/home.html",
                controller :"homeCtrl"
            })
            .state('detail', {
                url: "/detail/:objectId",
                templateUrl: "views/detail.html",
                controller :"detailCtrl"
            });
    });
})();
