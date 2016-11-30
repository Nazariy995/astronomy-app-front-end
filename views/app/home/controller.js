var app = angular.module('hello');
app.controller('HomeCtrl', function($scope, $rootScope,$state, UserService){
    UserService.get().then(function(res){
        console.log(res);
        $rootScope.user = res;
        if(res.role=="teacher"){
            $state.go('home.teacher');
        }else if(res.role =='student'){
            $state.go('home.student');
        }
    });













});
