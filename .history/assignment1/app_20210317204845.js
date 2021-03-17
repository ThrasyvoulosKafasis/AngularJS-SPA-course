(function () {
    'use strict';

    angular.module('LunchChecker', [])
        .controller('LunchCheckerController', ['$scope', LunchCheckerController]);

    function LunchCheckerController($scope) {
        $scope.title = "Lunch Checker";
        $scope.dishesStr = "";
        $scope.message = ""

        $scope.checkDishesInput = function () {

            // if str is empty
            if(!$scope.dishesStr){
                $scope.message = 'Please enter data first';
                return;
            }

            // split string by comma
            var messageArray = $scope.dishesStr.split(',').filter(item => item);

            // set message based on array length
            $scope.message = messageArray.length <=3 ? 'Enjoy!' : 'Too much!';

            console.log(messageArray);
        }

    };

})();