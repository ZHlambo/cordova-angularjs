var rootApp = indexApp
console.log(rootApp);
rootApp.register.controller('rootCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.tabbars = [{
        name: '首页',
        key: 'home',
        icon: 'fa fa-home'
    }, {
        name: '商城',
        key: 'mall',
        icon: 'fa fa-gift'
    }, {
        name: '购物车',
        key: 'shopping',
        icon: 'fa fa-shopping-cart'
    }, {
        name: '我的',
        key: 'personal',
        icon: 'fa fa-user'
    }];
    console.log($scope);
    $scope.tabbar_on = location.hash.replace('#!/',"") || 'home'
    $scope.changeTab = function(key) {
        $scope.tabbar_on = key
        location.href = "#!/" +key
    }
}])
//
// rootApp.register.config(['$routeProvider', '$controllerProvider', '$provide', '$compileProvider', '$filterProvider',
//     function($routeProvider, $controllerProvider, $provide, $compileProvider, $filterProvider) {
//         app.register = {//把顶级路由的以下五个方法放到app的register里面，子路由控制器才能调用
//             controller: $controllerProvider.register,
//             factory: $provide.factory,
//             service: $provide.service,
//             filter: $filterProvider.register,
//             directive: $compileProvider.directive
//         };
//         var resolveController = function(names, dependancies) {//获取文件，引入子路由的controller对应的js，获取成功了才加载页面
//             return {
//                 loadController: ['$q', '$rootScope', function($q, $rootScope) {
//                     var defer = $q.defer();
//                     require(names, function() {//require  获取文件的一个js框架里的方法，成功回调
//                         defer.resolve();
//                         $rootScope.$apply();
//                     });
//                     return defer.promise;
//                 }]
//             };
//         };
//         $routeProvider
//             .when('/', {
//                 templateUrl: '/home.html',
//                 controller: 'homeCtrl',
//                 resolve: resolveController(['js/home'])
//             })
//             .when('/mall', {
//                 templateUrl: '/mall.html',
//                 controller: 'mallCtrl',
//                 resolve: resolveController(['js/mall'])
//             })
//             .when('/shopping', {
//                 templateUrl: '/shopping.html',
//                 controller: 'shoppingCtrl',
//                 resolve: resolveController(['js/shopping'])
//             })
//             .when('/personal', {
//                 templateUrl: '/personal.html',
//                 controller: 'personalCtrl',
//                 resolve: resolveController(['js/personal'])
//             }).otherwise({
//                 redirectTo: '/'
//             });
//     }
// ])
