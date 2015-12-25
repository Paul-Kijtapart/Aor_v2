angular.module('education', [])

.controller('myEducation', ['$scope', function($scope) {
    $scope.coursesCompleted = ["CPSC340 - Machine Learning and Data Mining", "CPSC410 - Advanced Software Engineering", "CPSC404 - Advanced Relational Databases", "CPSC317 - Internet Computing","CPSC320 - Intermediate Algorithm Design and Analysis", "CPSC314 - Computer Graphics","CPSC322 - Introduction to Artificial Intelligence", "STAT300 - Intermediate Statistics for Applications"];

    $scope.test = "education";
}]);
