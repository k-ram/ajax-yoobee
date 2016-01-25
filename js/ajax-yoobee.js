$(document).ready(function(){
	
	// Listen to the form
	$('#note-form').submit( function( e ){

		// Prevent form from submitting
		e.preventDefault();

		// Garb the note from the form
		if( $.trim( $('#note').val() ) == '' ){
			return;
		}

		// Prepare AJAX
		$.ajax( {
			url: 'http://kristy.ramage.yoobee.net.nz/ajax-yoobee/ajax-yoobee.php',
			data: { note: $('#note').val() },
			success: function( dataFromServer ) {
				},
			error: function(){
				alert('Cannot Connect');
			}
		});

	});
});