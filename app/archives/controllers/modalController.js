/**
 * Created by Administrator on 2016/6/11 0011.
 */
angular.module('app.archives').controller('modalController',['$scope','$uibModalInstance',
    function($scope,$uibModalInstance){

        $scope.ok = function () {
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }
]);