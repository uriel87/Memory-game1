//
// app.factory('userDetailsFactory', ['$http', 'userCookiesService', function ($http, userCookiesService) {
//
//     // var mainInfo = $http.post("http://localhost:3000/getUser", query).then(function(data) {
//     //         return data;
//     //         // return res;
//     //     }), function error(err) {
//     //         return err;
//     //     }
//
//     // var query = {
//     //     email: userCookiesService.getUser.userEmail
//     // }
//
//     // return $http.post("http://localhost:3000/getUser", {
//     //     email: userCookiesService.getUser.userEmail
//     // }).then(function(data) {
//     //     console.log("userCookiesService.getUser.userEmail" + userCookiesService.getUser.userEmail);
//     //
//     // }), function error(err) {
//     //     return err;
//     // };
//
//
//     return {
//         user: function () {
//             $http.post("http://localhost:3000/getUser", {email: userCookiesService.getUser.userEmail})
//                 .then(function(data) {
//                 console.log("userDetailsFactory" + JSON.stringify(data));
//             }), function error(err) {
//                 return err;
//             }
//         }
//     }
//
//
//
//     // return {
//     //     user: function () {
//     //          $http.post("http://localhost:3000/getUser", query).then(function(data) {
//     //             return data;
//     //             // return res;
//     //         }), function error(err) {
//     //             return err;
//     //         }
//     //     }
//     // };
//
//     // var userDetails = {};
//     //
//     // userDetails.getUser = function (userEmail){
//     //     console.log("userDetails factory")
//     //     var query = {
//     //         email: userEmail
//     //     }
//     //
//     //     $http.post("http://localhost:3000/getUser", query).then(function(data) {
//     //         return data;
//     //         // return res;
//     //     }), function error(err) {
//     //         return err;
//     //     }
//     //
//     // }
//     //
//     // return userDetails;
//
// }]);