'use strict';

app.directive('navbar', function ($state, $location, $http, $log) {
  return {
    restrict: 'E',
    templateUrl: '/browser/components/navbar/navbar.html',
    link: function (scope) {
      scope.pathStartsWithStatePath = function (state) {
        var partial = $state.href(state);
        var path = $location.path();
        return path.startsWith(partial);
      };
      scope.logout = function() {
        $http.get("/logout")
        .then(function(response){
          return response.data;      
        })
        .then(function(res){
          console.log(res)
          $state.go("login")
        })

      }

    }
  }
});
