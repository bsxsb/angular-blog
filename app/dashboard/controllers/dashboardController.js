/**
 * Created by Administrator on 2016/6/9 0009.
 */

angular.module('app.dashboard').controller('dashboardController',['$http','$scope','$state','$rootScope',
    function($http,$scope,$state,$rootScope) {

        $rootScope.title = '首页 | 追杀一只老母鸡';
        var articleJson = 'dist/json/article.json',
            articleURL = articleJson + '?v=' + (new Date().getTime()); // jumps cache
        $http.get(articleURL).then(function (res) {
            $scope.articles = res.data.articles;
        });


        // $SQLite.ready(function () {
        //     var article = {
        //         "title" : "清风疲惫而后安睡",
        //         "info" : "你若幸运，我便庆幸；你若不信，我便不幸。 晨昏一曲惜笑靥，雪落寒窗凉意遍， 牵起往日深长情，奈何缘浅今相离。 清风疲惫，斜躺而睡。 一切所有回味，只为寻觅一份不在的安慰。 暖暖阳煦温润散落，心寒成荫无法照进。 空旷荡漾地城路，显影的清妆淡淡... ",
        //         "content":"<p>你若幸运，我便庆幸；你若不信，我便不幸。</p><p>晨昏一曲惜笑靥，雪落寒窗凉意遍，</p><p>牵起往日深长情，奈何缘浅今相离。</p><p>清风疲惫，斜躺而睡。</p><p>一切所有回味，只为寻觅一份不在的安慰。</p><p>暖暖阳煦温润散落，心寒成荫无法照进。</p><p>空旷荡漾地城路，显影的清妆淡淡明媚。</p><p>夜阑人静为何浮生摇曳，云遮星暗为何深感累累；</p><p>行色匆忙为何无故憔悴，丢失雨伞为何伤心流泪。</p><p>落叶飘向尘埃近地，于是将自己深埋途地。</p><p>繁华异变，惊心疲惫。</p><p>道不明心绪，理不清了混乱。</p><p>仰望天空，满天繁星闪烁，才发现是那么的脆弱，无尽的黑暗，总会带来了无限的想像。</p><p>面临许多的决择，人生往往不尽如意。</p><p>生活带来的沉重打击，太多的压迫感使于无行。</p><p>彼岸成空，心怀疲惫。</p><p>静待命运无声地安排，彷拂一切都是上天带来地自然考验，在磨练风雨无阻地意志。</p><p>我以为自己足够坚强，却因你的一句话而被感无力伤心欲觉。</p><p>梦里安睡，心无畏意，不会疲惫。</p><p>幸福一直存在，只是离我太远。</p><p>欲与相思花还落，独自暗笑谁犹怜；</p><p>星月相候唯孤守，清风衣袖泪两流。</p><p>微风拂过，我感受到了香草般清新的气味，依旧傻笑、赤坎坚持自我洋溢着幸福的笑脸，无比欢悦。</p><p>其实放弃也是一种腾欢的解脱，只是已付的心从不肯轻易认输。</p><p>默然璃嗳，幸福一直都在。</p>",
        //         "date" : "2016年12月5日",
        //         "img" : "http://qzhai.net/000/wp-content/uploads/2015/12/111-e1452232566209.jpeg"
        //     }
        //
        //     this.selectFirst('SELECT * FROM articles ')
        //         .then(
        //             function () { console.log('Empty Result!'); },
        //             function () { console.err('Error!'); },
        //             function (data) {
        //                 console.log(data);
        //                 // Result!
        //                 // data.item
        //                 // data.count
        //                 // data.result
        //             }
        //         );
        //
        //     // this.insert('articles', article);
        // });
    }
]);