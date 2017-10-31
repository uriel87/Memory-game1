
app.service('userService', ['$http', '$cookies', function ($http, $cookies) {

    this.putUserCookies = function (name, email, image){
        $cookies.put('userName', name);
        $cookies.put('userEmail', email);
        $cookies.put('userImage', image);
    }

    this.removeUserCookies = function () {
        $cookies.remove('userName');
        $cookies.remove('userEmail');
        $cookies.remove('userImage');
    }

    this.checkUserLogIn = function () {
        if($cookies.get('userName')){
            return true;
        }
    }

    this.getUser = function () {
        var userDetails = {
            'userName': $cookies.get('userName'),
            'userEmail': $cookies.get('userEmail'),
            'userImage': $cookies.get('userImage')
        }
        return userDetails;
    }

    this.addUserToDb = function (userName, UserEmail, userImage, userBirthday) {

        var query = {
            name: userName,
            email: UserEmail,
            image: userImage,
            birthday: userBirthday
        }

        $http.post("http://localhost:3000/addUser", query)
        .then(function(data) {
            console.log("addUserToDb - " + data);
        }), function error(err) {
            return err;
        }
    }



}]);