"use strict";

app.controller("GuildListCtrl", function($scope, GuildFactory) {


	$scope.GetGuilds = () => {
		var GuildArray = [];
		GuildFactory.GetAllGuilds()
		.then((data) => {
			console.log("GetGuilds Data", data);
			for(var item in data){
				GuildArray.push(data[item]);
			}
			$scope.guilds = GuildArray;
			// $scope.$apply();
		});
	};

	$scope.GetGuilds();
	

});