(function () {
    'use strict';

    angular.module('LunchChecker', [])
        .module('LunchChecker')
        .controller('LunchCheckerController', LunchCheckerController);

    var LunchCheckerController = function ($scope) {
        $scope.title = 'Lunch Checker';
    }

})();