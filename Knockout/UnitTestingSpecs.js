/// <reference path="../lib/jasmine-1.3.1/jasmine.js" />
/// <reference path="js/lib/require-2.1.8.min.js" />
/// <reference path="js/lib/Squire.js" />
/// <reference path="js/UnitTesting/sampleApp/ModuleDIModel.js" />
/// <reference path="js/UnitTesting/sampleServices/ListOfItemsService.js" />

require.config({
    baseUrl: "js/UnitTesting",
    paths: {
        "Squire": "../../Knockout/js/lib/Squire"
    }
});

describe("Knockout", function () {
    
    describe("Testing the ModuleDIModel", function () {
        var async = new AsyncSpec(this);
        var viewmodel = null;

        var expectedServiceResponse = [{ name: "A", number: 123 }];
        var mockService = {
            getList: function () { return expectedServiceResponse; }
        };

        async.beforeEach(function (done) {
            require(['Squire'], function (squire) {
                squire.mock(["ListOfItemsService"], mockService)
                      .require(["ModuleDIModel", "mocks"], function (viewmodelInstance, mocks) {
                          viewmodel = viewmodelInstance;
                          done();
                      });
            });
        });

        async.it("should start with an empty list of items", function (done) {
            expect(viewmodel.listOfItems()).toEqual([]);
            done();
        });

        async.it("should populate list from service when fillItems() is called", function (done) {
            viewmodel.fillItems();
            expect(viewmodel.listOfItems()).toEqual(expectedServiceResponse);
            done();
        });
    });
});