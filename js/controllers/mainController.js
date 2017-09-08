angular.module("devmtnTravel").controller("mainCtrl", function($scope, mainSrv){

    $scope.connect = "controller connected";

    $scope.contacts = mainSrv.travelInfo;

})