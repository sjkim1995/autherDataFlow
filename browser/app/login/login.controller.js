app.controller("login", function($scope, $http, $log, Auth, $state){

	$scope.loginSubmit = function() {
		console.log("email: ", $scope.email);
		console.log("password: ", $scope.password);
		var userInfo = {
			email: $scope.email,
			password: $scope.password
		};
		
		Auth.login(userInfo)
		.then(function(response){
			$state.go("stories")
			console.log("login successful!")
		})
		.catch($log.error);




	}
})