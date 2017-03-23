var mallModule = app
console.log(mallModule);
mallModule.register.controller('mallCtrl',['$scope','$rootScope',function($scope,$rootScope){
  console.log($scope);
  $scope.name = "aaaa"
  console.log($rootScope.user);
}])
