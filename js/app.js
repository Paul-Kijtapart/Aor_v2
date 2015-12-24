angular.module('aornawat', ['ngRoute', 'contact', 'education', 'profile', 'projects', 'skills'])

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
        controller: 'myProjects'
    })

    // route for the contact page
    .when('/webs', {
        templateUrl: 'templates/webs.html',
        controller: 'myProjects'
    })
    .otherwise({
    	redirectTo: '/'
    });
}])
