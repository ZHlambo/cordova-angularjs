var indexApp = angular.module('indexApp', ['ui.router'])
var resolveController = function(names, dependancies) { //获取文件，引入子路由的controller对应的js，获取成功了才加载页面
    return {
        loadController: ['$q', '$rootScope', function($q, $rootScope) {
            var defer = $q.defer();
            require(names, function() { //require  获取文件的一个js框架里的方法，成功回调
                defer.resolve();
                $rootScope.$apply();
            });
            return defer.promise;
        }]
    };
};
indexApp.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$provide', '$compileProvider', '$filterProvider',
        function($stateProvider, $urlRouterProvider, $controllerProvider, $provide, $compileProvider, $filterProvider) {
            indexApp.register = { //把顶级路由的以下五个方法放到app的register里面，子路由控制器才能调用
                controller: $controllerProvider.register,
                factory: $provide.factory,
                service: $provide.service,
                filter: $filterProvider.register,
                directive: $compileProvider.directive
            };
            $urlRouterProvider.when("", "root/home");
            $stateProvider
                .state('root', {　　　　　　　　　　　　 //路由匹配规则
                    url: '/root',
                    templateUrl: "/root.html",
                    resolve: resolveController(['js/root'])
                })
                .state('root.home', {　　　　　　　　　　　　 //路由匹配规则
                    url: '/home',
                    templateUrl: "/home.html",
                    resolve: resolveController(['js/home'])
                })
                .state('root.mall', {　　　　　　　　　　　　 //路由匹配规则
                    url: '/mall',
                    templateUrl: "/mall.html",
                    resolve: resolveController(['js/mall'])
                })
                .state('root.shopping', {　　　　　　　　　　　　 //路由匹配规则
                    url: '/shopping',
                    templateUrl: "/shopping.html",
                    resolve: resolveController(['js/shopping'])
                })
                .state('root.personal', {　　　　　　　　　　　　 //路由匹配规则
                    url: '/personal',
                    templateUrl: "/personal.html",
                    resolve: resolveController(['js/personal'])
                })
            $urlRouterProvider.otherwise('root/personal'); //没有配置的状态就可以跳到 ‘/index’状态
        }
    ])
    //
    // indexApp.config(['$routeProvider', '$controllerProvider', '$provide', '$compileProvider', '$filterProvider',
    //     function($routeProvider, $controllerProvider, $provide, $compileProvider, $filterProvider) {
    //         indexApp.register = { //把顶级路由的以下五个方法放到app的register里面，子路由控制器才能调用
    //             controller: $controllerProvider.register,
    //             factory: $provide.factory,
    //             service: $provide.service,
    //             filter: $filterProvider.register,
    //             directive: $compileProvider.directive
    //         };
    //         var resolveController = function(names, dependancies) { //获取文件，引入子路由的controller对应的js，获取成功了才加载页面
    //             return {
    //                 loadController: ['$q', '$rootScope', function($q, $rootScope) {
    //                     var defer = $q.defer();
    //                     require(names, function() { //require  获取文件的一个js框架里的方法，成功回调
    //                         defer.resolve();
    //                         $rootScope.$apply();
    //                     });
    //                     return defer.promise;
    //                 }]
    //             };
    //         };
    //         $routeProvider
    //             .when('/', {
    //                 templateUrl: '/root.html',
    //                 controller: 'rootCtrl',
    //                 resolve: resolveController(['js/root'])
    //             })
    //     }
    // ])
