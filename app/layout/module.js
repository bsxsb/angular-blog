"use strict";


angular.module('app.layout', ['ui.router'])
.config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    root: {
                        templateUrl: 'app/layout/layout.tpl.html',
                        controller : 'layoutController'
                    }
                },
                data :{
                    authenticate :false
                },
                resolve: {
                    scripts: function(lazyScript){
                        return lazyScript.register([
                            "duoshuo"
                        ]);
                    }
                }
            });
    }
]);


