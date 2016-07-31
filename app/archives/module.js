/**
 * Created by Administrator on 2016/6/10 0010.
 */
angular.module('app.archives', [
    'ui.router'
]).config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('app.archives', {
                    url: '/archives/:id',
                    data: {
                        title: '首页'
                    },
                    views: {
                        "content@app": {
                            controller:'archivesController',
                            templateUrl:'app/archives/views/detail.tpl.html'
                        }
                    },
                    resolve: {
                        article:function(archivesService,$stateParams){
                             return archivesService.getArticles($stateParams.id);
                        }
                    }
                }
            )
    }
]);