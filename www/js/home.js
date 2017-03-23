var homeModule = app
console.log(homeModule);
homeModule.register.controller('homeCtrl',['$scope',function($scope){
  console.log($scope);
  $scope.name = "首页"
}])
