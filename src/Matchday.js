function Matchday(_fixtures) {

	var fixtures = _fixtures;

	this.getFixtures = getFixtures;
	this.assign = assign;

	function getFixtures() {
		return fixtures;
	}

	function assign() {
		for (var i = 0; i < fixtures.length; i++) {
			var fixture = fixtures[i];
			fixture.assign();
		};
	}

}