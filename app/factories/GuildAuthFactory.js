"use strict";

app.factory("GuildAuthFactory", function($q){

	var currentAccount = null;

	var CreateAccount = (AccountObject) => {
		return firebase.auth().createUserWithEmailAndPassword(AccountObject.email, AccountObject.password)
		.catch(function(error){
				console.log(error);
		});
	};

	var AccountLogin = (AccountObject) => {
		return firebase.auth().signInWithEmailAndPassword(AccountObject.email, AccountObject.password)
		.catch(function(error) {
			console.log(error);
		});
	};

	var AccountLogout = () => {
		console.log("Account is Logged Out");
		return firebase.auth().signOut();
	};

	var AccountAuth = () => {
		return $q((resolve, reject) => {
			firebase.auth().onAuthStateChanged((user)=>{
				if (user) {
					currentAccount = user.uid;
					// console.log("user", user);
					resolve(true);
				} else{
					resolve(false);
				}
			});
		});
	};

	var GetAccountId = () => {
		return currentAccount;
	};

	return {CreateAccount, AccountLogin, AccountLogout, AccountAuth, GetAccountId};
});