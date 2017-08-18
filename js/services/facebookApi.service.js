


app.service('facebookApiService', ['$cookies', 'userCookiesService', function ($cookies, userCookiesService) {

    (function () {
        window.fbAsyncInit = function() {
            FB.init({
                appId            : '519304358421127',
                autoLogAppEvents : true,
                xfbml            : true,
                cookie           : true,
                version          : 'v2.10'
            });
            FB.AppEvents.logPageView();
        };
    })

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    this.logIn = function (){
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                // FB.logout(function(response) {
                //     //document.location.reload();
                // });
            }
            else {
                FB.login(function(response) {
                    // console.log('response - ' + response);
                    if (response.authResponse) {
                        // console.log('response.status - ' + response.status);
                        // console.log('Welcome!  Fetching your information.... ');
                        FB.api('/me', {fields: 'name, picture, email'}, function(response) {
                            // console.log('Good to see you, ' + response + '.');
                            userCookiesService.putUserCookies(response.name, response.email, response.picture.data.url);
                        });
                    } else {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                });
            }
        });
    }

}]);