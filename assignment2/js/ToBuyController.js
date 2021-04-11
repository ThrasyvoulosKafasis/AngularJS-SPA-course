(function() {
    'use strict';

    angular.module('ShoppingListCheckOff')
        .controller('ToBuyController', ['$scope', 'ShoppingListCheckOffService',
            function($scope, ShoppingListCheckOffService) {
                $scope.list = ShoppingListCheckOffService.toBuyList;

                $scope.boughtItem = function(item, index) {

                    var obj = {
                        name: item.name,
                        quantity: item.quantity
                    };

                    ShoppingListCheckOffService.boughtItem(obj, index);
                }
            }
        ]);

})();