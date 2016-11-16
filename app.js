var app = angular.module('hello', [ 'ngRoute' ]);

app.config(function($routeProvider, $httpProvider) {

	$routeProvider.when('/', {
		templateUrl : 'views/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'ctrl'
	}).when('/home',{
        templateUrl : 'views/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'ctrl',
        css:'views/home/style.css'
    });

	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

});
