angular.module('projects', [])

.controller('myProjects', ['$scope', '$http', function($scope, $http) {
    
    $scope.messageH = "home";
    $scope.test = "projects";
}])

.controller('myAndroids', ['$scope', '$http', function($scope, $http) {
    $http.get('projects/android.json').success(function(data) {
        $scope.androids = data;
    });
    $scope.messageA = "androidss";
}])

.controller('myWebs', ['$scope', '$http', function($scope, $http) {
    $http.get('projects/web.json').success(function(data) {
        $scope.webs = data;
    });
    $scope.messageW = "webs";
}])
