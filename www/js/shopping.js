var shoppingModule = app
console.log(shoppingModule);
shoppingModule.register.controller('shoppingCtrl',['$scope',function($scope){
  console.log($scope);
  $scope.name = "aaaa"
}])
