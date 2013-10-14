// define a module with a sample ListOfItemsService that return a list of items when called
var sampleServices = angular.module('sampleServices', []);
sampleServices.service('ListOfItemsService', function () {
    this.getList = function () {
        // pretend call
        return [
            { name: "first value", number: 123 },
            { name: "second value", number: 456 },
            { name: "third value", number: 789 }
        ];
    };
})