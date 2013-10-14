// and a module that has a controller that depends on the ListOfItemsService
var sampleApp = angular.module('sampleApp', ['sampleServices']);
sampleApp.controller('ModuleDIController',
    ['$scope', 'ListOfItemsService',
    function ($scope, listOfItemsService) {
        $scope.textValue = "some text";
        $scope.listOfItems = [];

        $scope.fillItems = function () {
            $scope.listOfItems = listOfItemsService.getList();
        };
    }]
);