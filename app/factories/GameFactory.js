"use strict";

app.factory("GameFactory", function($q, $http){
	var GameData = {
		gameName: "Cohort Wars",
		websiteName: "CohortWarsClans.com",
		primaryColor: "",
		secondaryColor: "",
		backgroundImage: "",
		logo: "",
		favicon: ""
	};

	var logoUrl = firebase.storage().ref(`CohortWarsLogo.png`).getDownloadURL();
	GameData.favicon = firebase.storage().ref(`favicon.ico`).getDownloadURL();


	var GetGameInfo = () => {
		return GameData;
	};

	return{GetGameInfo};
});