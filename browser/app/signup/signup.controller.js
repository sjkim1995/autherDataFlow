app.controller("signup", function ($scope, Auth, $state, $log){
	$scope.signupSubmit = function () {
		var userInfo = {
			email: $scope.email,
			password: $scope.password
		};
		
		Auth.signup(userInfo)
		.then(function(response){
			$state.go("stories")
			console.log("signup successful!")
		})
		.catch($log.error);


	}
})