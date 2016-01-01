angular.module('projects', [])

.controller('myProjects', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.currIndex = 0;

    $http.get('projects/android.json').success(function(data) {
        $scope.androids = data;
        $scope.dispAndroid = data[$scope.currIndex].images[0];
        $scope.dispIcon = data[$scope.currIndex].icon;
    });
    $http.get('projects/web.json').success(function(data) {
        $scope.webs = data;
        $scope.dispWeb = data[$scope.currIndex].images[0];
        $scope.dispIcon = data[$scope.currIndex].icon;
    });


    $scope.setImage = function(imageUrl) {
        $scope.dispAndroid = imageUrl;
    };

    $scope.messageH = "home";
    $scope.test = "projects";
}])

.controller('myAndroids', ['$scope', '$http', function($scope, $http) {
    $scope.currIndex = 0;

    $http.get('projects/android.json').success(function(data) {
        $scope.androids = data;
        $scope.dispAndroid = data[$scope.currIndex].images[0];
        $scope.dispIcon = data[$scope.currIndex].icon;
    });

    $scope.setImage = function(imageUrl) {
        $scope.dispAndroid = imageUrl;
    };

    $scope.changeProject = function(name) {
        if (name === "Vibernate 2") {
            $scope.currIndex = 0;
            $scope.dispAndroid = $scope.androids[$scope.currIndex].images[0];
        } else {
            $scope.currIndex = 1;
            $scope.dispAndroid = $scope.androids[$scope.currIndex].images[0];
        }
    };

    $scope.messageA = "androidss";
}])

.controller('myWebs', ['$scope', '$http', function($scope, $http) {
    $scope.currIndex = 0;

    $http.get('projects/web.json').success(function(data) {
        $scope.webs = data;
        $scope.dispWeb = data[$scope.currIndex].images[0];
        $scope.dispIcon = data[$scope.currIndex].icon;
    });

    $scope.setImage = function(imageUrl) {
        $scope.dispWeb = imageUrl;
    };


    $scope.messageW = "webs";
}]);
