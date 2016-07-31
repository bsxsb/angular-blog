/**
 * Created by DWUSER on 2016/2/29.
 */
/**
 * Created by ENV on 2015/11/19.
 */
angular.module('app.common').directive('heightAdapter',['$window',function($window) {
    return {
        restrict: 'A',
        scope:{offsetTop:"@offsetTop",offsetBottom:"@offsetBottom"},
        link: function (scope, element, attrs) {

            element.css("height" , $window.innerHeight - scope.offsetTop - scope.offsetBottom);
            $(window).bind("load resize", function() {
                element.css("height" , this.window.innerHeight - scope.offsetTop - scope.offsetBottom);
            });

        }
    };
}]);