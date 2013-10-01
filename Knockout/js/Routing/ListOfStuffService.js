// basic fake service with a GetAll and GetById call
define("ListOfStuffService", function () {
    var stuff = [
               { id: 1, name: "First Item", description: "It's the first item, woohoo!" },
               { id: 2, name: "Second Item", description: "Numero Dos!" },
               { id: 3, name: "Third Item", description: "The third item, this one is always out of stock" }
    ];

    return {
        getAll: function () {
            return stuff;
        },
        getById: function (id) {
            for (var i in stuff) {
                if (stuff[i].id == id)
                    return stuff[i];
            }
        }
    };
});