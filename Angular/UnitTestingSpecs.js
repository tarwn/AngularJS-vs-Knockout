/// <reference path="../lib/jasmine-1.3.1/jasmine.js" />
/// <reference path="js/lib/angular-1.0.8.min.js" />
/// <reference path="js/lib/angular-mocks.js" />
/// <reference path="js/UnitTesting/sampleApp.js" />
/// <reference path="js/UnitTesting/sampleServices.js" />

// unit tests for the Angular controller
//  borrowed heavily from http://www.benlesh.com/2013/05/angularjs-unit-testing-controllers.html
describe("Angular", function () {
    describe("Testing the ModuleDIController", function () {
        var $scope = null;
        var controller = null;

        var expectedServiceResponse = [{ name: "A", number: 123 }];
        var mockService = {
            getList: function () { return expectedServiceResponse; }
        };

        beforeEach(module('sampleApp'));
        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            controller = $controller('ModuleDIController', {
                $scope: $scope,
                ListOfItemsService: mockService
            });
        }));

        it('should start with an empty list of items', function () {
            expect($scope.listOfItems).toEqual([]);
        });

        it('should populate list from service when fillItems() is called', function () {
            $scope.fillItems();
            expect($scope.listOfItems).toEqual(expectedServiceResponse);
        });

    });
});