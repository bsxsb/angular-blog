
angular.module('app', [
    'ui.bootstrap',
    'ui.router',
    // 'ngSQLite',

    'app.common',
    'app.layout',
    'app.dashboard',
    'app.about',
    'app.archives'
])
// .constant('DB_CONFIG', {
//     articles: {
//         id: 'key',
//         title: { type: 'text', null: false },
//         date: { type: 'text' },
//         content: { type: 'LONGTEXT' },
//         info: { type: 'text' },
//         img: { type: 'text'}
//     },
//     catgery: {
//         id: 'key',
//         name: { type: 'text', null: false }
//     }
// })
// .run(function ($SQLite) {
//     $SQLite.dbConfig({
//         name: 'my-blog-db',
//         description: 'blog-db',
//         version: '1.0'
//     });
// })
// .run(function ($SQLite, DB_CONFIG) {
//     $SQLite.init(function (init) {
//         angular.forEach(DB_CONFIG, function (config, name) {
//             init.step();
//             $SQLite.createTable(name, config).then(init.done);
//         });
//         init.finish();
//     });
// })
.config( ['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider,   $urlRouterProvider,   $httpProvider) {
        $urlRouterProvider.otherwise('/dashboard');
        $httpProvider.interceptors.push(['$q','$rootScope', function($q,$rootScope) {
            return {
                'request': function (config) {
                    return config;
                },
                'responseError': function(response) {
                    if(response.status === 401 || response.status === 403) {
                        //$state.go('login');
                        $rootScope.$broadcast('unauthorized');
                    }
                    return $q.reject(response);
                }
            };
        }]);
    }
])
.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('unauthorized', function() {
            $state.transitionTo('app.dashboard');
        });
        $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
            if (toState.data.authenticate==true){

            }
        });
    }
]);