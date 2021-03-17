(function () {
    'use strict';

    angular.module('LunchChecker', [])
        .controller('LunchCheckerController', LunchCheckerController);

    function LunchCheckerController($scope) {
        $scope.title = "Lunch Checker";
        $scope.dishes_str = "";

    };

})();
