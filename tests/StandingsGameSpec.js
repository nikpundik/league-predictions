describe("Standings Game", function() {

	it("should submit a matchday", function() {
		var game = new Game();
		game.submit({});
		expect(game.submitted()).toEqual(1);
	});

});