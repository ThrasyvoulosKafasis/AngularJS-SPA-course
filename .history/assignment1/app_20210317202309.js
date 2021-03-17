(function () {
    'use strict';

    angular.module('LunchChecker', [])
        .module('LunchChecker')
        .controller('LunchCheckerController', LunchCheckerController);

    function LunchCheckerController($scope) {
        $scope.title = 'Lunch Checker';
    }

})();