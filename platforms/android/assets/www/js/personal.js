var personalModule = app
console.log(personalModule);
personalModule.register.controller('personalCtrl',['$scope','$rootScope',function($scope,$rootScope){
  console.log($scope);
  $scope.name = "aaaa"
  $scope.user = $rootScope.user || {}
  $scope.user.headerimg = $scope.user.headerimg || 'http://ok273wav2.qnssl.com/noPicture.png'
}])
