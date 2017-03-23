indexApp.register.controller('rootCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.innerHeight = window.innerHeight
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
        $scope.rootPage = "home"
        var hashs = location.hash.split("/")
        $scope.tabbar_on = hashs[hashs.length - 1] || 'home'
        $scope.changeTab = function(key) {
            $scope.rootPage = key
            $scope.tabbar_on = key
            location.href = "#!/root/" + key
        }
    }])
