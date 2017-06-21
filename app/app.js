"use strict";

var app = angular.module("GuildApp", ["ngRoute"]);

let AccountAuth =  (GuildAuthFactory) => {
	return new Promise((resolve, reject)=>{
		GuildAuthFactory.AccountAuth()
		.then((AccountExists)=>{
			if(AccountExists){
				resolve(true);
			} else {
				resolve(false);
			}
		});
	});
};

app.config(function($routeProvider) {
	$routeProvider
	.when("/",{
		templateUrl: "partials/SplashPage.html"
	})
	.when("/tips", {
		templateUrl: "partials/Tips.html"
	})
	.when("/how", {
		templateUrl: "partials/How.html"
	})
	.when("/who", {
		templateUrl: "partials/Who.html"
	})
	.when("/login", {
		templateUrl: "partials/Login.html"
	})
	.when("/support", {
		templateUrl: "partials/Support.html"
	})
	.when("/guild-signup", {
		templateUrl: "partials/GuildSignup.html",
		controller: "LoginCtrl"
	})
	.when("/account/guild-form", {
		templateUrl: "partials/GuildForm.html",
		controller: "GuildFormCtrl",
		resolve: {AccountAuth}
	})
	.when("/account/preview", {
		templateUrl: "partials/Preview.html",
		controller: "PreviewCtrl",
		resolve: {AccountAuth}
	})
	.when("/account/details" , {
		templateUrl: "partials/Account.html",
		controller: "AccountCtrl",
		resolve: {AccountAuth}
	})
	.when("/account/edit", {
		templateUrl: "partials/GuildForm.html",
		controller: "GuildEditCtrl",
		resolve: {AccountAuth}
	})
	.when("/vote", {
		templateUrl: "partials/Vote.html",
		controller: "VoteCtrl"
	})
	.when("/steam/login", {
		templateUrl : "partials/SteamPage.html",
		controller: "SteamCtrl"
	})
	.otherwise("/");
});

	app.run((FBcreds) =>{
		let creds = FBcreds;
    	let authConfig = {
        	apiKey: creds.apiKey,
        	authDomain: creds.authDomain,
        	databaseURL: creds.databaseURL
        };

		firebase.initializeApp(FBcreds);
});