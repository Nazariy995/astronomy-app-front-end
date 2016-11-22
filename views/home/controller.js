var app = angular.module('hello');
app.controller('HomeCtrl', function($scope, $rootScope, UserService){
    $rootScope.user = UserService.get().then(function(res){
        return res;
    });









});
