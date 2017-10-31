

app.directive('fireWork', function () {
    return {
        restrict: E,
        replace: true,
        templateUrl: 'templates/tabs.html',
        link: function(scope, element, attributes) {
            scope.userDetails = userService.getUser();
            element.addClass('main-menu');
        }
    }
});

