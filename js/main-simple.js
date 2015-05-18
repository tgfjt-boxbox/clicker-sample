$(function() {
	var count = 0;

	$('#js-btn').click(function(e) {
		e.preventDefault();
		count++;
		$('#js-clicks').text(count);
	});
});
