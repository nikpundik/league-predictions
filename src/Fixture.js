function Fixture(_homeTeam, _awayTeam) {

	var homeScore = 0;
	var awayScore = 0;
	var homeTeam = _homeTeam;
	var awayTeam = _awayTeam;
	var assigned = false;

	this.assign = assign;
	this.setScore = setScore;
	this.getHomeTeam = getHomeTeam;
	this.getAwayTeam = getAwayTeam;
	this.getHomeScore = getHomeScore;
	this.getAwayScore = getAwayScore;

	function assign() {

		if (assigned) throw "this fixture has already assigned points";
		assigned = true;

		if (draw()) {
			homeTeam.addPoints(1);
			awayTeam.addPoints(1);
		} else if (homeWin()) {
			homeTeam.addPoints(3);
			awayTeam.addPoints(0);
		} else {
			homeTeam.addPoints(0);
			awayTeam.addPoints(3);
		}
		
	}

	function getHomeTeam() {
		return homeTeam;
	}

	function getAwayTeam() {
		return awayTeam;
	}

	function getHomeScore() {
		return homeScore;
	}

	function getAwayScore() {
		return awayScore;
	}

	function setScore(_homeScore, _awayScore) {
		homeScore = _homeScore;
		awayScore = _awayScore;
	}

	function draw() {
		return homeScore == awayScore;
	}

	function homeWin() {
		return homeScore > awayScore;
	}

}