"use strict";

app.controller("GuildEditCtrl", function($scope, $http, GuildFactory, GuildAuthFactory, $window){

	var accountID = GuildAuthFactory.GetAccountId();
	

	GuildFactory.GetOneGuild(accountID)
	.then((data)=>{
		$scope.account = data;
	});

	$scope.submitGuild = () => {
		GuildFactory.EditGuild($scope.account, accountID)
		.then($window.location.href = "#!/account/details");
	};

	$scope.upload = function() {
                console.log("upload fired");
                var storageRef = firebase.storage().ref(`guilds/${accountID}.jpg`);
                var imageValue = $scope.file;
                var blob = new Blob([imageValue], { type: "image/jpeg" });
                console.log("imageValue", imageValue);
                storageRef.put(blob)
                .then(
                	storageRef.child(`guilds/${accountID}.jpg`).getDownloadURL())
                .then(function(url) {
                	console.log("url", url);
                	$scope.account.image = url.a.downloadURLs[0];
                	console.log($scope.account.image);
                	$scope.$apply();
                	});
     };

    $scope.fileChanged = function(element) {
    	var file = $('#fileInput')[0].files[0];
    	console.log(file);
        $scope.file = file;
        $scope.$apply();
    };

});