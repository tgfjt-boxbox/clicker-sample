var Clicks = function(n) {
	this.count = n;
};

Clicks.prototype.add = function() {
	this.count++;
	return this;
};

Clicks.prototype.getCount = function() {
	return this.count;
};

$(function() {
	var c = new Clicks(0);

	$('#js-btn').click(function(e) {
		e.preventDefault();
		$('#js-clicks').text(c.add().getCount());
	});
});
