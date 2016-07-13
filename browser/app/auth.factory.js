app.factory("Auth", function ($http) {
	var AuthMethods = {
		currentUser: null
	};

	AuthMethods.set = function (user) {
		AuthMethods.currentUser = user.email;
	};

	AuthMethods.get = function () {
		return AuthMethods.currentUser;
	};

	AuthMethods.login = function (userInfo) {
		AuthMethods.set(userInfo);

		return $http.post("/login", userInfo)
			.then(function(response){
				console.log(response);
				return response.data;
			})
	}

	AuthMethods.signup = function(userInfo) {
		AuthMethods.set(userInfo);

		return $http.post("/api/users", userInfo)
			.then(function(response){
				return response.data
			})
	}

	return AuthMethods;
})
