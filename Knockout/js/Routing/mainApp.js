// and a module that has a controller that depends on the ListOfItemsService
define("mainApp",
    ["knockout"],
    function (ko) {
        return function () {
            this.viewmodel = ko.observable();
        }
    }
);