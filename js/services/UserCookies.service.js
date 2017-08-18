
app.service('userCookiesService', ['$cookies', function ($cookies) {

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

    this.checkUserCookies = function () {
        if($cookies.get('userName')){
            return true;
        }
    }

    this.getUserCookies = function () {
        var userCookies = {
            'userName': $cookies.get('userName'),
            'userEmail': $cookies.get('userEmail'),
            'userImage': $cookies.get('userImage')
        }
        return userCookies;
    }

}]);