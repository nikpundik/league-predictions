function League(_matchdays) {

	var matchdays = _matchdays;
	var teams = [];

	this.getMatchdays = getMatchdays;
	this.getTeams = getTeams;
	this.setTeams = setTeams;
	this.sortStandings = sortStandings;
	this.assign = assign;

	function getMatchdays() {
		return matchdays;
	}

	function getTeams() {
		return teams;
	}

	function setTeams(_teams) {
		teams = _teams;
	}

	function sortStandings() {
		teams.sort(function(a, b) {
			return b.getPoints() - a.getPoints();
		});
	}

	function assign() {
		for (var i = 0; i < matchdays.length; i++) {
			var matchday = matchdays[i];
			matchday.assign();
		};
		sortStandings();
	}

}