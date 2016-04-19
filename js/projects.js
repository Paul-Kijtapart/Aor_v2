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

// ANDROID Projects
.controller('myAndroids', ['$scope', '$http', function($scope, $http) {
    $scope.currIndex = 0;
    $scope.selected = 0;

    $http.get('projects/android.json').success(function(data) {
        $scope.androids = data;
        $scope.dispAndroid = data[$scope.currIndex].images[0];
        $scope.dispIcon = data[$scope.currIndex].icon;
    });

    $scope.setImage = function(imageUrl, index) {
        $scope.dispAndroid = imageUrl;
    };

    $scope.changeProject = function(name, index) {
        if (name === "Vibernate 2") {
            $scope.currIndex = 1;
            $scope.dispAndroid = $scope.androids[$scope.currIndex].images[0];
        } else {
            $scope.currIndex = 0;
            $scope.dispAndroid = $scope.androids[$scope.currIndex].images[0];
        }

        $scope.selected = index;
    };

    $scope.messageA = "androidss";
}])

// WEB Projects
.controller('myWebs', ['$scope', '$http', function($scope, $http) {
    $scope.currIndex = 0;
    $scope.selected = 0;

    $http.get('projects/web.json').success(function(data) {
        $scope.webs = data;
        $scope.dispWeb = data[$scope.currIndex].images[0];
        $scope.dispIcon = data[$scope.currIndex].icon;
    });

    $scope.setImage = function(imageUrl, index) {
        $scope.dispWeb = imageUrl;
    };

    $scope.changeProject = function(name, index) {
        if (name === "Restaurant Management") {
            $scope.currIndex = 2;
            $scope.dispWeb = $scope.webs[$scope.currIndex].images[0];
        } else if (name === "Creative Image") {
            $scope.currIndex = 1;
            $scope.dispWeb = $scope.webs[$scope.currIndex].images[0];
        } else {
            $scope.currIndex = 0;
            $scope.dispWeb = $scope.webs[$scope.currIndex].images[0];
        }

        $scope.selected = index;
    };

    $scope.messageW = "webs";
}]);
