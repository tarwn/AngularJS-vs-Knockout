define("sampleApp/ModuleDIModel",
    ["sampleServices/ListOfItemsService"],
    function (listOfItemsService) {
        return function () {
            this.textValue = ko.observable("some text");
            this.listOfItems = ko.observableArray([]);

            this.fillItems = function () {
                this.listOfItems(listOfItemsService.getList());
            };
        }
    }
);