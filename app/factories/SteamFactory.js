// "use strict";

// app.factory("SteamFactory", function($q, $http, $window) {

// 	var landingPage;

// 	var login = () => {
// 		return $q((resolve, reject) => {
// 			console.log("SteamFactory function fired");
// 			$http.get(`http://localhost:3000/authenticate`)
// 			.then((returned) => {
// 				console.log("stuff back from steam", returned);
// 				landingPage = returned.data;
// 				//$window.location.href = "https://steamcommunity.com/openid/login?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.return_to=http%3A%2F%2Flocalhost%3A3000%2Fverify&openid.realm=http%3A%2F%2Flocalhost%3A3000%2F";
// 				$window.location.href = "#!/steam/login";
// 			});
// 		});
// 	};

// 	var verify = () => {
// 		return $q((resolve, reject) => {
// 			console.log("SteamFactory function fired");
// 			$http.get(`http://localhost:3000/verify`)
// 			.then((returned) => {
// 				console.log("stuff back from steam", returned);
// 				landingPage = returned.data;
// 				$window.location.href = "#!/";
// 			});
// 		});
// 	};
// 	var GetPage = () => {
// 		return landingPage;
// 	};

// 	return {login, GetPage};

// });