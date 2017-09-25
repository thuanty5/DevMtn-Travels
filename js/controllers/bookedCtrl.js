angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv){

    if($stateParams.id){
        $scope.bookPackage = mainSrv.packageInfo.filter(function(package){
            return package.id == $stateParams.id;
        });
    }
    
    for(var i in $scope.bookPackage){
        console.log($scope.bookPackage[i])
    }
})