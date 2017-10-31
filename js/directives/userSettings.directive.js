
/******************************
 *
 * userSettings directive
 *
 ******************************/

app.directive('userSettings', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../views/templates/usersettings.html',
        link: function(scope, element, attributes) {
            element.addClass('user-settings');
        }
    }
});
