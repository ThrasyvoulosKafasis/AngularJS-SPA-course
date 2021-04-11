(function() {
    'use strict';

    angular.module('ShoppingListCheckOff')
        .controller('AlreadyBoughtController', ['$scope', 'ShoppingListCheckOffService',
            function($scope, ShoppingListCheckOffService) {
                $scope.list = ShoppingListCheckOffService.alreadyBoughtList;
            }
        ]);

})();