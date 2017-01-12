
function Controller($scope, $state){
    "ngInject";

    this.credentials = {
        username: '',
        password : ''
    };


}

module.exports = angular.module('app.views.app.login.controller', [])
.controller('AppLoginController', Controller);

