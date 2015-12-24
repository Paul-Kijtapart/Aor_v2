angular.module('projects', [])

.controller('myProjects', ['$scope','$http', function($scope, $http) {
    $http.get('projects/android.json').success(function(data){
    	$scope.androids = data;
    });

    $http.get('projects/web.json').success(function(data){
    	$scope.webs = data;
    });


    $scope.messageA = "android",
    $scope.messageW = "web",
    $scope.messageH = "home";
    $scope.test = "projects";
}]);