// and a module that has a controller that depends on the ListOfItemsService
define("StuffDetailViewModel",
    ["knockout", "ListOfStuffService"],
    function (ko, listOfItemsService) {
        return function (id) {
            this.template = "StuffDetailViewModel";
            var item = listOfItemsService.getById(id);
            this.item = ko.observable(item);
        }
    }
);