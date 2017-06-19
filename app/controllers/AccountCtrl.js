"use strict";

app.controller("AccountCtrl", function($scope, GuildFactory, GuildAuthFactory, $window) {

	var accountID = GuildAuthFactory.GetAccountId();


	GuildFactory.GetOneGuild(accountID)
	.then((data) => {
		$scope.account = data;
	});

	$scope.preview = () => {
		$window.location.href = "#!/account/preview";
	};

	$scope.logout = () => {
		GuildAuthFactory.AccountLogout()
		.then($window.location.href = "#!/");
	};

	$scope.edit = () => {
		$window.location.href = "#!/account/edit";
	};
});