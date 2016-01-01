angular.module('skills', [])

.controller('mySkills', ['$scope', '$http', function($scope, $http) {
    $scope.teamTool = ["Git"];
    $scope.mobileDev = ["Android"];
    $scope.webDev = ["HTML&CSS", "Three.js", "angularJS"];
    $scope.analyticSkill = ["matlab", "R studio"];
    $scope.databaseSkill = ["SQL"];

    $http.get('projects/skills.json').success(function(data) {
        $scope.skills = data;
    });

    $scope.checkValue = function(skills) {
        for (var name in skills) {
            console.log(name);
        }
    };
}]);
