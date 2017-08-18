

app.config(["$routeProvider",'$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider
        .when("/memoryGame", {
            templateUrl: '../views/memoryGame.html',
            controller: 'memoryGameCtl'
        })
        .when("/main", {
            templateUrl: '../views/main.html',
            controller: 'mainCtl',
        })
        .when("/about", {
            templateUrl: '../views/about.html'
            // controller: 'aboutCtl'
        })
        .when("/contactUs", {
            templateUrl: '../views/contactUs.html'
            // controller: 'contactUsCtl'
        })
        .when("/user", {
            templateUrl: '../views/user.html'
            // controller: 'userCtl'
        })
        .when("/", {
            templateUrl: '../views/logIn.html',
            controller: 'logInCtl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);