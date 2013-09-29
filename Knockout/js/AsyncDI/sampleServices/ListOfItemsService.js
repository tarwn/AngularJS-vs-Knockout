// define a ListOfItemsService service that return a list of items when called
define("sampleServices/ListOfItemsService", function () {
    // return an object literal for the service object
    return {
        getList: function () {
            return [
                { name: "first value", number: 123 },
                { name: "second value", number: 456 },
                { name: "third value", number: 789 }
            ];
        }
    }
});