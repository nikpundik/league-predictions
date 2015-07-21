function League(_matchdays) {

	var matchdays = _matchdays;

	this.getMatchdays = getMatchdays;
	this.assign = assign;

	function getMatchdays() {
		return matchdays;
	}

	function assign() {
		for (var i = 0; i < matchdays.length; i++) {
			var matchday = matchdays[i];
			matchday.assign();
		};
	}

}