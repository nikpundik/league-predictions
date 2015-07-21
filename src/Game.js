function Game() {

	var matchdays = [];

	this.submit = submit;
	this.submitted = submitted;

	function submit(matchday) {
		matchdays.push(matchday);
	}

	function submitted() {
		return 1;
	}

}