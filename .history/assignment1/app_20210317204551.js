(function () {
    'use strict';

    angular.module('LunchChecker', [])
        .controller('LunchCheckerController', ['$scope', LunchCheckerController]);

    function LunchCheckerController($scope) {
        $scope.title = "Lunch Checker";
        $scope.dishesStr = "";
        $scope.message = ""

        $scope.checkDishesInput = function () {

            if(!$scope.dishesStr){
                $scope.message = 'Please enter data first';
                return;
            }


            console.log('checkDishesInput');

            var messageArray = $scope.dishesStr.split(',').filter(item => item);

            console.log(messageArray);
        }

    };

})();
