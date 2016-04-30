angular.module('contact', [])
    .controller('myContact', ['$scope', '$http', function($scope, $http) {
        $scope.test = "contact";
        $scope.form_name = "";
        $scope.form_email = "";
        $scope.form_phone = "";
        $scope.msg_text = "";

        $scope.submitForm = function(isValid) {
            if (isValid) {
                // alert("OK")
                $http({
                    method: 'POST',
                    url: 'php/send_email.php',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
                    data: {
                        name: $scope.form_name,
                        email: $scope.form_email,
                        phone: $scope.form_phone,
                        message: $scope.msg_text
                    }
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    // alert(response.status)
                    console.log(response.status);
                    console.log(response.data);




                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    alert(response.status)
                });
            } else {
                alert("Not good");
            }
        };

    }]);
