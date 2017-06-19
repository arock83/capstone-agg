"use strict";

app.controller("GuildEditCtrl", function($scope, GuildFactory, GuildAuthFactory, $window){

	var accountID = GuildAuthFactory.GetAccountId();

	GuildFactory.GetOneGuild(accountID)
	.then((data)=>{
		$scope.account = data;
	});

	$scope.submitGuild = () => {
		GuildFactory.EditGuild($scope.account, accountID)
		.then($window.location.href = "#!/account/details");
	};

});