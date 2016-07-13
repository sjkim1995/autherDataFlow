'use strict';

app.directive('signIn', function ($http, $log, Auth, $state) {
  return {
    restrict: 'E',
    templateUrl: '/browser/app/sign-in/sign-in.html',
    scope: {
      usermethod: "="
    },
    link: function (scope, element, attrs) {
      scope.usermethod = attrs.usermethod;
      var fnToCall = attrs.usermethod === 'login' ? Auth.login : Auth.signup;

      scope.signupSubmit = function () {
        var userInfo = {
          email: scope.email,
          password: scope.password
        };

        fnToCall(userInfo)
        .then(function(response){
          $state.go("stories")
        })
        .catch($log.error);
      }

      // scope.loginSubmit = function() {

      //   var userInfo = {
      //     email: scope.email,
      //     password: scope.password
      //   };

      //   Auth.login(userInfo)
      //   .then(function(response){
      //     $state.go("stories")
      //     console.log("login successful!")
      //   })
      //   .catch($log.error);
      // }

    }
  };
});
