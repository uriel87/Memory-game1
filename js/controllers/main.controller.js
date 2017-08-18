


app.controller('mainCtl', ['$scope', '$location', 'userCookiesService', function ($scope, $location, userCookiesService) {

    if(!userCookiesService.checkUserCookies()){
        $location.path('/').replace();
    }

    $scope.userDetails = userCookiesService.getUserCookies();

    $scope.logOut = function () {
        userCookiesService.removeUserCookies();
        //console.log("logOut user " + $scope.userDetails.userName);
        FB.getLoginStatus(function (response) {
            if (response && response.status === 'connected') {
                FB.logout(function(response) {});
            }
        });
        $location.path('/');
    }
}]);