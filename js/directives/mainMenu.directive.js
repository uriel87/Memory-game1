
/******************************
 *
 * main menu directive
 *
 ******************************/

app.directive('mainMenu',['userService', function (userService) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../views/templates/mainMenu.html',
        link: function(scope, element, attributes) {
            scope.userDetails = userService.getUser();
            element.addClass('main-menu');
        }
    }
}]);
