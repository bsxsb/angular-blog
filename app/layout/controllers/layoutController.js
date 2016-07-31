
"use strict";

angular.module('app.layout').controller('layoutController',['$scope','$rootScope','$state','$http','$location',
    function ($scope,$rootScope,$state,$http) {
        $scope.state = $state.current.data.name;
        $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
            $scope.state = toState.name;
        });

        var latestJson = 'dist/json/latest.json',
            latestURL  = latestJson + '?v=' + (new Date().getTime()); // jumps cache

        $http.get(latestURL).then(function(res) {
                $scope.latest = res.data.latest;
        });
    }
])