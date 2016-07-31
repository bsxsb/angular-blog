/**
 * Created by Administrator on 2016/6/9 0009.
 */
angular.module('app.dashboard', [
    'ui.router'
]).config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('app.dashboard', {
                    url: '/dashboard',
                    data: {
                        title: '首页'
                    },
                    views: {
                        "content@app": {
                            controller:'dashboardController',
                            templateUrl:'app/dashboard/views/dashboard.tpl.html'
                        }
                    }
                }
            )
    }
]);