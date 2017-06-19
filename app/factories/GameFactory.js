"use strict";

app.factory("GameFactory", function($q, $http){
	var GameData = {
		gameName: "Cohort Wars",
		websiteName: "CohortWarsClans.com",
		primaryColor: "",
		secondaryColor: "",
		backgroundImage: "",
		logo: ""
	};

	var GetGameInfo = () => {
		return GameData;
	};
});