'use strict';
var app = angular.module("yatragenie", ['ui.router','ngMaterial']).
    config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/Main");
        $stateProvider
            .state('Cabs', {
                url: '/cabs',
                templateUrl: 'Common/SearchForm/cabsSearchForm.html'
                
            })
            .state('Buses',{
                url:'/buses',
                templateUrl:'Common/SearchForm/busSearch.html',
                controller:'searchFormCtrl'
            })
            .state('Print/Cancel Ticket',{
                url:'/printCancel',
                templateUrl:'Common/CustomerCare/printCancel.html',
                controller:'CancelCtrl'
            })
            .state('Main',{
                url:'/buses',
                templateUrl:'Main/main.html'
            })        
            ;
    });
app.controller("navController", function ($scope) {
    $scope.contactUs = ['Nellore', 'Vijayawada', 'Bangalore', 'Guntur', 'Tirupati'];
    $scope.customerCare = ['Print/Cancel Ticket', 'Refund Status', 'Resend SMS'];
});

app.controller('MainController', function ($scope) { 
    $scope.tabs=[{text:'Buses',selected:false},{text:'Cabs',selected:true},{text:'Hotels',selected:false}];
    
});
app.directive('tabs', function () {
    return {
        restrict: 'E',
        templateUrl: 'Common/tabs.html',
        scope: {
            tabNames: '=name'
        },
        controller: function ($scope) {
            $scope.clickTab = function (tab) {
                for (var i = 0; i < $scope.tabNames.length; i++) {
                    if ($scope.tabNames[i] === tab) {
                        $scope.tabNames[i].selected = !$scope.tabNames[i].selected;
                    } else {
                        $scope.tabNames[i].selected = false;
                    }
                }

            }

        }
    }
});



