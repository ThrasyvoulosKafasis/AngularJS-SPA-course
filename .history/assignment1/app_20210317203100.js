(function () {
    'use strict';

    angular.module('LunchChecker', [])
        .controller('LunchCheckerController', LunchCheckerController);

    function LunchCheckerController($scope) {
        $scope.title = "Lunch Checker";

        console.log('scope');
    };

})();
