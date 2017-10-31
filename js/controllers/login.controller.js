
app.controller('logInCtl', ['$scope', '$timeout', '$window', '$location', 'userService','facebookApiService', function ($scope, $timeout, $window, $location, userService, facebookApiService) {

    if(userService.checkUserLogIn()){
        $location.path('/main').replace();
    }

    $scope.logIn = function () {
        facebookApiService.logIn();
        $location.path('/main').replace();
    }

}]);


