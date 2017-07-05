"use strict";

app.factory("GuildFactory", function($q, $http, FBcreds, GuildAuthFactory) {


var GetOneGuild = (guildID) => {

	return $q((resolve, reject) => {

		var OneGuild;
		$http.get(`${FBcreds.databaseURL}/guilds.json`)
		.then((returnedObj) => {
			var dataObj = returnedObj.data;
			for(var prop in dataObj) {
				if(dataObj[prop].accountKey == guildID) {
				 	OneGuild = dataObj[prop];
				 	OneGuild.dataKey = prop;
				}
			}
			console.log("OneGuild", OneGuild);
			resolve(OneGuild);
		})
		.catch((error) => {
			console.log(error);
			reject(error);
		});
	});
};

var GetAllGuilds = () => {
	return $q((resolve, reject) => {
		$http.get(`${FBcreds.databaseURL}/guilds.json`)
		.then((returnedObj) => {
			let newObj = returnedObj.data;
			for(var key in newObj) {
					newObj[key].dataKey = key;
				}
			console.log(newObj);
			resolve(newObj);
		})
		.catch((error) => {
			console.log(error);
			reject(error);
		});
	});
};

var AddNewGuild = (guildObject, accountID) => {
	return $q((resolve, reject) => {
		let newObj = JSON.stringify(guildObject);
		$http.post(`${FBcreds.databaseURL}/guilds.json`, newObj)
			.then((returnedObj) => {
				console.log(returnedObj);
				resolve(returnedObj);
			})
			.catch((error)=>{
				console.log(error);
				reject(error);
			});
	});
};

var EditGuild = (guildObject, accountID) => {
	return $q((resolve, reject) => {
		let newObj = JSON.stringify(guildObject);
		$http.patch(`${FBcreds.databaseURL}/guilds/${guildObject.dataKey}.json`, newObj);
	});
};

// var UploadImg = (file, accountID) => {
// 	return $q((resolve, reject) => {
// 		var storageRef = firebase.storage().ref(`GuildBanners/${accountID}.jpg`);
// 		storageRef.put(file);
// 	})
// 	.then((returnedObj) => {
// 		console.log(returnedObj);
// 	});
// };

return {GetOneGuild, GetAllGuilds, AddNewGuild, EditGuild};
});