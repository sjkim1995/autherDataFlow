'use strict';

app.controller('UserListCtrl', function ($scope, users, User, Auth) {
  $scope.users = users;
  $scope.addUser = function () {
    $scope.userAdd.save()
    .then(function (user) {
      $scope.userAdd = new User();
      $scope.users.unshift(user);
    });
  };

  $scope.editable = function() {
    return Auth.isAdmin();
  }
  $scope.userSearch = new User();

  $scope.userAdd = new User();
});
