indexApp.register.controller('personalCtrl',['$scope','$rootScope',function($scope,$rootScope){
  $scope.name = "aaaa"
  $scope.user = $rootScope.user || {}
  $scope.user.headerimg = $scope.user.headerimg || 'http://ok273wav2.qnssl.com/noPicture.png'
}])
