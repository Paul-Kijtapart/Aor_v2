angular.module('aornawat', ['ngRoute', 'contact', 'education', 'profile', 'projects', 'skills', 'duScroll'])

.controller('mainCtrl', ['$scope', '$document',
    function($scope, $document) {
        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0, 5000).then(function() {
                // DO something cool
            });
        };
        var section3 = angular.element(document.getElementById('section-3'));
        $scope.toSection3 = function() {
            $document.scrollToElementAnimated(section3);
        };
    }
])

.value('duScrollBottomSpy', true)

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'myProjects'
    })

    // route for the about page
    .when('/androids', {
        templateUrl: 'templates/androids.html',
        controller: 'myAndroids'
    })

    // route for the contact page
    .when('/webs', {
            templateUrl: 'templates/webs.html',
            controller: 'myWebs'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
