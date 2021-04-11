(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .service('ShoppingListCheckOffService', function() {

            var toBuyList = [
                { name: "cookies", quantity: 10 },
                { name: "milk", quantity: 2 },
                { name: "juice", quantity: 5 },
                { name: "bananas", quantity: 10 },
                { name: "bread", quantity: 3 }
            ];

            var alreadyBoughtList = [];

            return {
                toBuyList,
                alreadyBoughtList,
                boughtItem: function(item, index) {
                    toBuyList.splice(index, 1);
                    alreadyBoughtList.push(item);
                }
            }
        });
})();