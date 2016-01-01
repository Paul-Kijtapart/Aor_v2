angular.module('contact', [])

.controller('myContact', ['$scope', function($scope) {
    $scope.test = "contact";


    $scope.submitForm = function(isValid) {
        if (isValid) {
            alert('Successfully sent');
            // TODO: clear form after
        }
    };

}]);
