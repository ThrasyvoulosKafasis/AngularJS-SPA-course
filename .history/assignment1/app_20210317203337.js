(function () {
    'use strict';

    angular.module('LunchChecker', [])
        .controller('LunchCheckerController', ['$scope', LunchCheckerController]);

    function LunchCheckerController($scope) {
        $scope.title = "Lunch Checker";
        $scope.dishes_str = "";

        $scope.checkDishesInput(){
            console.log('checkDishesInput');
        }

    };

})();
