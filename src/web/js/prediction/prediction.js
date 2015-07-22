angular.module('StandingsGame', [])
	.controller('PredictionController', function() {

		var prediction = this;
		prediction.game = gameFactory();
		prediction.leagueName = "League";

		prediction.next = function() {
			prediction.game.next();
		};

		prediction.isEnded = function() {
			return !prediction.game.hasNext() && !prediction.game.isLast();
		};

		prediction.addHomeScore = function(fixture) {
			fixture.setScore(fixture.getHomeScore() + 1, fixture.getAwayScore());
		}

		prediction.addAwayScore = function(fixture) {
			fixture.setScore(fixture.getHomeScore(), fixture.getAwayScore() + 1);
		}

		function gameFactory() {
			var teamA = new Team("a");
			var teamB = new Team("b");
			var teamC = new Team("c");
			var teamD = new Team("d");

			var fixture1 = new Fixture(teamA, teamB);
			var fixture2 = new Fixture(teamC, teamD);
			var matchday1 = new Matchday([fixture1, fixture2]);

			var fixture3 = new Fixture(teamA, teamC);
			var fixture4 = new Fixture(teamB, teamD);
			var matchday2 = new Matchday([fixture3, fixture4]);

			var fixture5 = new Fixture(teamA, teamD);
			var fixture6 = new Fixture(teamB, teamC);
			var matchday3 = new Matchday([fixture5, fixture6]);

			var league = new League([matchday1, matchday2, matchday3]);
			league.setTeams([teamA, teamB, teamC, teamD]);

			return new Game(league);
		}

	});


