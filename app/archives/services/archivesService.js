/**
 * Created by Administrator on 2016/6/10 0010.
 */
angular.module('app.archives').factory('archivesService', [ '$http','$q',
    function($http,$q) {

        return {
            getConmmentCount : function(thread_key,success){
                var count = 0
                $http({method: 'JSONP', url: 'http://api.duoshuo.com/threads/counts.jsonp?&short_name=bsxsb&threads=' + thread_key+'&callback=JSON_CALLBACK'}).
                then(function(response) {
                    angular.forEach(response.data.response,function (value, key) {
                        if(key == thread_key){
                           count = value.comments;
                        }
                    })
                    success(count);

                }, function(response) {
                    success(count);
                });
             },
            getArticles : function(index){
                var def = $q.defer();
                $http.get('dist/json/article.json').then(function(res) {
                    var articles = res.data.articles;
                    def.resolve(articles[index]);
                },function(err) {
                    def.reject(err);
                });
                return def.promise;
                // $http.get('dist/json/article.json').then(function(res) {
                //     var articles = res.data.articles;
                //     success(articles);
                // });
            }
        }

    }
]);