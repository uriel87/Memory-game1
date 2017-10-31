//
//
// app.service('userDetailsService', ['$http', '$cookies', function ($http, $cookies) {
//
//     this.user;
//
//     this.getUser = function (userEmail){
//         var user;
//         console.log("userDetails factory")
//         var query = {
//             email: userEmail
//         }
//
//         $http.post("http://localhost:3000/getUser", query).then(function(data) {
//             //console.log("get user data" + JSON.stringify(data));
//             this.user = data;
//             return data;
//         }), function error(err) {
//             return err;
//         }
//
//     }
//
//
//
//     this.getUser = function () {
//         $http.post("http://localhost:3000/getUser", {email: $cookies.get('userEmail')}).then(function(data) {
//             //console.log("get user data" + JSON.stringify(data));
//             //this.user = data;
//             return data;
//         })
//
//     }
//
//
//
// }]);