"use strict";

app.controller("GuildListCtrl", function($scope, GuildFactory) {


	$scope.GetGuilds = () => {
		GuildFactory.GetAllGuilds()
		.then((data) => {
			$scope.guilds = data;
		});
	};

	$scope.GetGuilds();

});