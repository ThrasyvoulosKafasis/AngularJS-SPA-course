(function () {
    'use strict';

    angular.module('LunchChecker', [])
        .controller('LunchCheckerController', ['$scope', LunchCheckerController]);

    function LunchCheckerController($scope) {
        $scope.title = "Lunch Checker";
        $scope.dishesStr = "";
        $scope.message = ""

        $scope.checkDishesInput = function () {

            // split string by comma
            var messageArray = $scope.dishesStr.split(',')
                .filter(function (item) {
                    console.log(!item);
                    return item.length > 0;
                });

            // .filter(item => function () {
            //     console.log(item.length);
            //     return item !== " ";
            // });

            console.log(messageArray);

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
