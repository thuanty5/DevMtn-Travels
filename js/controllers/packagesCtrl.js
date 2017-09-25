angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrv){

    //scope entire packageInfo from service
    $scope.packageInfo = mainSrv.packageInfo;

    //scope packageInfo by country
    if($stateParams.country === "United States"){
        $scope.packageInfo = mainSrv.packageInfo.filter(function(package){
            return package.country === $stateParams.country;
        })
    }else if($stateParams.country === "France"){
        $scope.packageInfo = mainSrv.packageInfo.filter(function(package){
            return package.country === $stateParams.country;
        })
    }else if($stateParams.country === "Australia"){
        $scope.packageInfo = mainSrv.packageInfo.filter(function(package){
            return package.country === $stateParams.country;
        })
    }

    for(var i in $scope.packageInfo){
        mainSrv.packageInfo[i].price = $scope.packageInfo[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    //console log packageInfo
    for(var i in $scope.packageInfo){
        console.log($scope.packageInfo[i]);
    }
    
})