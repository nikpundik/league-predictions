function Game(_league) {

	var league = _league;
	var matchdays = league.getMatchdays();
	var matchdayIndex = 0;
	var currentMatchday = matchdays[0];

	this.getCurrentMatchday = getCurrentMatchday;
	this.next = next;
	this.hasNext = hasNext;
	this.getLeague = getLeague;

	function getCurrentMatchday() {
		return currentMatchday;
	}

	function next() {
		currentMatchday = matchdays[++matchdayIndex];
	}

	function hasNext() {
		return matchdayIndex + 1 < matchdays.length;
	}

	function getLeague() {
		return league;
	}

}