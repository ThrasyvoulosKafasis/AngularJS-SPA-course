(function () {
    'use strict';

    angular.module('LunchChecker', [])
        .controller('LunchCheckerController', ['$scope', LunchCheckerController]);

    function LunchCheckerController($scope) {
        $scope.dishesStr = "";
        $scope.message = ""

        $scope.checkDishesInput = function () {

            // split string by comma
            var messageArray = $scope.dishesStr.split(',').filter(item => item.length > 0);

            // if str is empty
            if (messageArray.length === 0) {
                $scope.message = 'Please enter data first';
                return;
            }

            // set message based on array length
            $scope.message = messageArray.length <= 3 ? 'Enjoy!' : 'Too much!';
        }

    };

})();
