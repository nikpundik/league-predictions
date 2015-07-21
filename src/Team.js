function Team(name) {

	var points = 0;

	this.name = name;
	this.getPoints = getPoints;
	this.addPoints = addPoints;

	function getPoints() {
		return points;
	}

	function addPoints(p) {
		points += p;
	}

}