"use strict";

app.controller("GuildFormCtrl", function($scope, Upload, GuildAuthFactory, GuildFactory, $window, $resource) {


        var account = GuildAuthFactory.GetAccountId();

	$scope.account = {
		name: "",
		website: "",
		description: "",
		ts: "",
		discord: "",
		gameServer: "",
		bannerImg: "",
		accountKey: account
	};

	$scope.submitGuild = function () {
		GuildFactory.AddNewGuild($scope.account, $scope.account.accountKey)
		.then($window.location.href = "#!/account/details");
	};
});

