/**
 * Created by Administrator on 2016/6/9 0009.
 */
angular.module('app.about', [
    'ui.router'
]).config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('app.about', {
                    url: '/about',
                    data: {
                        title: 'about'
                    },
                    views: {
                        "content@app": {
                            controller:'aboutController',
                            templateUrl:'app/about/views/about.tpl.html'
                        }
                    }
                }
            )
    }
]);