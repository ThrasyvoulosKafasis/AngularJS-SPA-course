angular.module('LunchChecker', []);

angular
    .module('LunchChecker')
    .controller('LunchCheckerController', LunchCheckerController);

var LunchCheckerController = function ($scope) {
    $scope.title = 'Lunch Checker';
}