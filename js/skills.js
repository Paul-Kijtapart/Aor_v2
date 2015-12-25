angular.module('skills', [])

.controller('mySkills', ['$scope', function($scope) {
	$scope.teamTool = ["Git"];
	$scope.mobileDev = ["Android"]
	$scope.webDev = ["HTML&CSS", "Three.js", "angularJS"];
	$scope.analyticSkill = ["matlab", "R studio"];
	$scope.databaseSkill = ["SQL"]
}]);