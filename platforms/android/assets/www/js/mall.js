var mallModule = app
console.log(mallModule);
mallModule.register.controller('mallCtrl',['$scope',function($scope){
  console.log($scope);
  $scope.name = "aaaa"
}])
