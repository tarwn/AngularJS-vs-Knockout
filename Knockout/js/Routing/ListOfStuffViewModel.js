// and a module that has a controller that depends on the ListOfItemsService
define("ListOfStuffViewModel",
    ["knockout", "ListOfStuffService"],
    function (ko, listOfItemsService) {
        return function () {
            this.template = "ListOfStuffViewModel";
            var items = listOfItemsService.getAll();
            this.listOfItems = ko.observableArray(items);
        }
    }
);