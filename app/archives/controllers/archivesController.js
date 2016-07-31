/**
 * Created by Administrator on 2016/6/10 0010.
 */
angular.module('app.archives').controller('archivesController',['$rootScope','$timeout','$http','$scope','$uibModal','$sce','$state','$location','$stateParams','archivesService','article',
    function($rootScope,$timeout,$http,$scope,$uibModal,$sce,$state,$location,$stateParams,archivesService,article){
        $scope.article = article;
        // $scope.currentTitle=  $scope.article.title;
        // $scope.threadKey = $stateParams.id;
        // $scope.currentUrl=$location.absUrl();


        $rootScope.title = article.title+ ' | 追杀一只老母鸡';

        $scope.launch = function(){
            var modalInstance = $uibModal.open({
                templateUrl: 'myModalContent.html',
                controller: 'modalController'
            });

            modalInstance.result.then(function(data) {
                console.log(data);
            });

        };


        $scope.threadKey = $scope.article.id;
        $scope.currentUrl=$location.absUrl();
        $scope.currentTitle=  $scope.article.title;
        var el = document.createElement('div');//该div不需要设置class="ds-thread"
        el.setAttribute('data-thread-key', $scope.threadKey);//必选参数
        el.setAttribute('data-title', $scope.currentTitle);//必选参数
        el.setAttribute('data-url', $scope.currentUrl);//必选参数
        $timeout(function () {
            DUOSHUO.EmbedThread(el);
            jQuery($("#ds-thread")).empty();
            jQuery($("#ds-thread")).append(el);
        },500);

        archivesService.getConmmentCount($scope.threadKey,function(commentCount){
            $scope.commentCount = commentCount;
        });
    }
]).filter('unsafe', function($sce) {
    return $sce.trustAsHtml;
});