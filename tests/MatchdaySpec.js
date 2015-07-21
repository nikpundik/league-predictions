describe("League", function() {

	it("should create a league", function() {
		var league = new League([]);
		expect(league.getMatchdays().length).toEqual(0);
	});

	it("should assign points", function() {

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
		league.assign();

		expect(teamA.getPoints()).toEqual(3);
		expect(teamB.getPoints()).toEqual(3);
		expect(teamC.getPoints()).toEqual(3);
		expect(teamD.getPoints()).toEqual(3);

	});

});

describe("Matchdays", function() {

	it("should create a matchday", function() {
		var teamA = new Team("a");
		var teamB = new Team("b");
		var teamC = new Team("c");
		var teamD = new Team("d");
		var fixture1 = new Fixture(teamA, teamB);
		var fixture2 = new Fixture(teamC, teamD);
		var matchday = new Matchday([fixture1, fixture2]);
		expect(matchday.getFixtures().length).toEqual(2);
	});

	it("should assign points for a matchday", function() {
		var teamA = new Team("a");
		var teamB = new Team("b");
		var teamC = new Team("c");
		var teamD = new Team("d");
		var fixture1 = new Fixture(teamA, teamB);
		fixture1.setScore(3, 0);
		var fixture2 = new Fixture(teamC, teamD);
		var matchday = new Matchday([fixture1, fixture2]);
		matchday.assign();
		expect(teamA.getPoints()).toEqual(3);
		expect(teamB.getPoints()).toEqual(0);
		expect(teamC.getPoints()).toEqual(1);
		expect(teamD.getPoints()).toEqual(1);
	});

});

describe("Fixtures", function() {

	var teamA = null;
	var teamB = null;

	beforeEach(function() {
		teamA = new Team("a");
		teamB = new Team("b");
	});

	function assignFixtureWithResult(h, a) {
		var fixture = new Fixture(teamA, teamB);
		fixture.setScore(h, a);
		fixture.assign();
		return fixture;
	}

	it("should create a 0-0 fixture", function() {
		var fixture = new Fixture(teamA, teamB);
		fixture.assign();
		expect(teamA.getPoints()).toEqual(1);
		expect(teamB.getPoints()).toEqual(1);
	});

	it("should assign points for home win", function() {
		assignFixtureWithResult(1, 0);
		expect(teamA.getPoints()).toEqual(3);
		expect(teamB.getPoints()).toEqual(0);
	});

	it("should assign points for home lose", function() {
		assignFixtureWithResult(2, 5);
		expect(teamA.getPoints()).toEqual(0);
		expect(teamB.getPoints()).toEqual(3);
	});

	it("should assign points for every fixture", function() {
		assignFixtureWithResult(0, 0);
		assignFixtureWithResult(1, 0);
		assignFixtureWithResult(0, 0);
		assignFixtureWithResult(2, 3);
		expect(teamA.getPoints()).toEqual(5);
		expect(teamB.getPoints()).toEqual(5);
	});

	it("should throw exception on multiple assign", function() {
		
		function multipleAssign() {
			var fixture = new Fixture(teamA, teamB);
			fixture.assign();
			fixture.assign();
		}

		expect(multipleAssign).toThrow();
	});

});

describe("Teams", function() {

	it("should create a team with no points", function() {
		var team = new Team("a");
		expect(team.getPoints()).toEqual(0);
	});

});