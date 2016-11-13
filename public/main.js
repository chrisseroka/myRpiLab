$(function(){
	console.log('hello from main.js');

	$('#red').click(function(){
		$.post('/red', function(data){
			console.dir(data);
		});
	});
});

