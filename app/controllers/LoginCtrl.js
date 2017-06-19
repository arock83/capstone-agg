"use strict";

app.controller("LoginCtrl", function($scope, GuildAuthFactory, $window, GuildFactory) {

	$scope.account = {
		email: "",
		password: ""
	};

	GuildAuthFactory.AccountAuth()
		.then((boolean) => {
			if(boolean) {
				GuildAuthFactory.AccountLogout();
			}
		});


	$scope.accountRegister = () => {
		GuildAuthFactory.CreateAccount({
			email: $scope.account.email,
			password: $scope.account.password
		})
		.then((AccountData) => {
			$scope.accountLogin();
		}, (error) => {
			console.log("error creating user");
		});
	};

	$scope.accountLogin = () => {
		GuildAuthFactory.AccountLogin($scope.account)
		.then((data)=>{
			GuildFactory.GetOneGuild(data.uid)
			.then((OneGuild) => {
				console.log("does an account exist?", OneGuild);
				if(OneGuild) {
					$window.location.href = "#!/account/details";
				} else {
					$window.location.href = "#!/account/guild-form";
				}
			});
		});
	};



});