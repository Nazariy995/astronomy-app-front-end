var app = angular.module('hello');
app.controller('LoginCtrl', function($rootScope, $scope, $location, AuthService){
    var self = this;
    self.credentials = {
        username:'',
        password:''
    };

    self.login = function(credentials){
        AuthService.login(credentials).then(function(res){
            console.log(res);
            if(res.authenticated){
                $rootScope.authenticated = true;
                $location.path("/home");
                console.log("Login Succeeded ")
            }else{
                $rootScope.authenticated = false;
                $location.path("/");
                console.log("Login Failed");
            }
        },function(){
            $rootScope.authenticated = false;
                console.log("Login Failed");
        });
    };


});
