var personalModule = app
console.log(personalModule);
personalModule.register.controller('personalCtrl',['$scope',function($scope){
  console.log($scope);
  $scope.name = "aaaa"
}])
