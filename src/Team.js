function Team(name) {

	var points = 0;

	this.name = name;
	this.getPoints = getPoints;
	this.addPoints = addPoints;
	this.getName = getName;

	function getPoints() {
		return points;
	}

	function addPoints(p) {
		points += p;
	}

	function getName() {
		return name;
	}

}