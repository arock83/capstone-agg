"use strict";

app.controller("PreviewCtrl", function($scope, GuildFactory, GuildAuthFactory) {

	var accountID = GuildAuthFactory.GetAccountId();

	
	GuildFactory.GetOneGuild(accountID)
	.then((data) => {
		$scope.account = data;
	});
});