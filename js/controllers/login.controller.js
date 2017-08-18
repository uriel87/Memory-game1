
app.controller('logInCtl', ['$scope', '$timeout', '$window', '$location', 'userCookiesService','facebookApiService', function ($scope, $timeout, $window, $location, userCookiesService, facebookApiService) {

    if(userCookiesService.checkUserCookies()){
        $location.path('/main').replace();
    }

    $scope.logIn = function () {
        facebookApiService.logIn();
        $location.path('/main').replace();
    }

}]);


