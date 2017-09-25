angular.module('devmtnTravel').controller('locationsCtrl', function($scope, $stateParams, mainSrv){

    $scope.travelInfo = mainSrv.travelInfo

    for(var i in $scope.travelInfo){
        mainSrv.travelInfo[i].price = $scope.travelInfo[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    
})