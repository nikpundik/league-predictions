describe("Standings Game", function() {

	var league = null;

	function createLeague() {
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

		league = new League([matchday1, matchday2, matchday3]);
		league.setTeams([teamA, teamB, teamC, teamD]);
	}

	it("should go to next matchday", function() {

		createLeague();
		var game = new Game(league);

		var matchday = game.getCurrentMatchday();
		var fixtures = matchday.getFixtures();

		expect(fixtures[0].getHomeTeam().getName()).toEqual("a");
		expect(fixtures[0].getAwayTeam().getName()).toEqual("b");

		game.next();

		matchday = game.getCurrentMatchday();
		fixtures = matchday.getFixtures();

		expect(fixtures[0].getHomeTeam().getName()).toEqual("a");
		expect(fixtures[0].getAwayTeam().getName()).toEqual("c");
	});

	it("should have at least one matchday", function() {
		var league = new League([]);
		league.setTeams([]);
		var game = new Game(league);
		expect(game.getCurrentMatchday()).toBe(undefined);
	});

	it("should check for next matchday", function() {
		createLeague();
		var game = new Game(league);
		expect(game.hasNext()).toBe(true);
		game.next();
		expect(game.hasNext()).toBe(true);
		expect(game.isLast()).toBe(false);
		game.next();
		expect(game.hasNext()).toBe(false);
		expect(game.isLast()).toBe(true);
	});

	it("should update standings after next is called", function() {
		createLeague();
		var game = new Game(league);
		var teamA = game.getLeague().getTeams()[0];
		expect(teamA.getPoints()).toBe(0);
		game.next();
		expect(teamA.getPoints()).toBe(1);
		game.next();
		expect(teamA.getPoints()).toBe(2);
	});

	it("should create a league", function() {
		var league = new League([]);
		expect(league.getMatchdays().length).toEqual(0);
	});

	it("should assign points", function() {

		createLeague();
		league.assign();

		var teams = league.getTeams();

		for (var i = 0; i < teams.length; i++) {
			var team = teams[i];
			expect(team.getPoints()).toEqual(3);
		};

	});

	it("should return teams ordered by points", function() {

		createLeague();
		league.getMatchdays()[0].getFixtures()[0].setScore(3, 0);
		league.assign();
		var standings = league.getTeams();
		expect(standings.length).toEqual(4);
		expect(standings[0].getName()).toBe("a");
		expect(standings[3].getName()).toBe("b");

	});

});