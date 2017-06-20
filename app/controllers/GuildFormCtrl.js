"use strict";

app.controller("GuildFormCtrl", function($scope, $http, GuildAuthFactory, GuildFactory, $window, $resource) {


        var accountID = GuildAuthFactory.GetAccountId();

	$scope.account = {
		name: "",
		website: "",
		description: "",
		ts: "",
		discord: "",
		gameServer: "",
		image: "",
		accountKey: accountID,
                votes: 0
	};

	$scope.submitGuild = function () {
		GuildFactory.AddNewGuild($scope.account, $scope.account.accountKey)
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


