


app.controller('myGamesCtl', ['$scope', '$timeout', '$window', '$location', 'userService','facebookApiService', function ($scope, $timeout, $window, $location, userService, facebookApiService) {

    // if(userService.checkUserLogIn()){
    //     $location.path('/main').replace();
    // }
    //

    $scope.bool = false;

    $scope.displayAddGameLightBox = false;

    $scope.openAddGame = function () {
        console.log("openAddGame");
        console.log("displayAddGameLightBox = " + !$scope.displayAddGameLightBox);
        $scope.displayAddGameLightBox = !$scope.displayAddGameLightBox;
    }

}]);



