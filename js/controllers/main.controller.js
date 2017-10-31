


app.controller('mainCtl', ['$scope','$location','userService','facebookApiService', function ($scope, $location, userService, facebookApiService) {

    if(!userService.checkUserLogIn()){
        $location.path('/').replace();
    }

    // facebookApiService.checkLogIn();

    $scope.logOut = function () {
        facebookApiService.logOut();
        console.log("logOut user " + $scope.userDetails.userName);
    }

}]);