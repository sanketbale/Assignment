$(document).ready(function () {
	$('#hamburger-button').click(function () {
		$(this).toggleClass('open');
	});

	$('.options').toggle();

	$('.add-on img').click(function () {
		$(this).toggleClass('open');
		var id =  $(this).attr('data-target');
		$('#'+id).toggle();
	});

	$('.pack-details').toggle();

	$('.card.pack').click(function () {
		$('.pack-details').toggle();
		if (!$(this).hasClass('flip')) {
			$('.card.pack').removeClass('flip');
			$(this).toggleClass('flip');
		} else {
			$(this).toggleClass('flip');
		}
	});

	$('.toggle .item').click(function () {
		$('.toggle .item').toggleClass('active');
	});


	$('.individual-report').click(function () {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).children().removeClass('open');
			$(this).addClass('closed');
			$(this).children().addClass('closed');
		} else {
			$(this).addClass('open');
			$(this).children().addClass('open')
		};
		
		var id =  $(this).attr('data-target');

		if($('#'+id).hasClass('open')) {
			$('#'+id).removeClass('open');
			$('#'+id).height(0);
		  } else {
			$('#'+id).addClass('open');
			$('#'+id).height('60px');
		  }
	});

	$('.form-item.date-range span img').daterangepicker({
		"showDropdowns": true,
		"autoApply": true,
		"showCustomRangeLabel": false,
		"startDate": "12/08/2020",
		"endDate": "12/18/2020",
		"drops": "auto"
	}, function(start, end, label) {
	  console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	});
});