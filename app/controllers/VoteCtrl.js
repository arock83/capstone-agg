"use strict";

app.controller("VoteCtrl", function($scope, GuildFactory, $window){


$scope.castVote = () => {
	console.log($("#guildSelector").val());
	var guildID = $("#guildSelector").val();
	GuildFactory.GetOneGuild(guildID)
	.then((OneGuild) => {
		console.log("OneGuild", OneGuild);
		console.log("votes", OneGuild.votes);
		if (OneGuild.votes) {
			console.log("vote condition true");
			var currentVotes = OneGuild.votes;
			currentVotes += 1;
			OneGuild.votes = currentVotes;
			GuildFactory.EditGuild(OneGuild, guildID)
			.then($window.location.href = "#!/");
		} else {
			console.log("vote condition false");
			OneGuild.votes = 1;
			GuildFactory.EditGuild(OneGuild, guildID)
			.then($window.location.href = "#!/");
		}
	});
};

$scope.GetGuilds = () => {
	GuildFactory.GetAllGuilds()
	.then((data) => {
		$scope.guilds = data;
	});
};

$scope.GetGuilds();


});