app.factory("Auth", function ($http) {
	var AuthMethods = {};

	AuthMethods.login = function (userInfo) {

		return $http.post("/login", userInfo)
			.then(function(response){
				return response.data
			})
	}

	AuthMethods.signup = function(userInfo) {

		return $http.post("/api/users", userInfo)
			.then(function(response){
				return response.data
			})
	}

	return AuthMethods;
})