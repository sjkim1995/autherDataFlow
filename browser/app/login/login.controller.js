app.controller("login", function($scope, $http, $log, Auth, $state){

	$scope.loginSubmit = function() {
		console.log("email: ", $scope.email);
		console.log("password: ", $scope.password);
		// var userInfo = {
		// 	email: $scope.email,
		// 	password: $scope.password
		// };
		
		
		// var id;
		// Auth.login(userInfo)
		// .then(function(response){
		// 	$http.post("/api/auth/me", userInfo.email)
		// 	.then(function(res) {
				
		// 		$state.go("/user/" + id) 
		// 	}) 

		// 	console.log("login successful!")
		// })
		// .catch($log.error);




	}
})