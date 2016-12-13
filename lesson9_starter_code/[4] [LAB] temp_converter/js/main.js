var result;

$("#fahrenheit_to_celsius").on('click', function(){
	var fahrenheit = $('#temperature').val();
	fahrenheit = parseInt(fahrenheit);

	result=((fahrenheit - 32)/1.8).toFixed(2);

	$("#result").html(result+"&deg;C");
	if(result>= 23.8){
		$('body').css('background-color','red');
	}else{
		$('body').css('background-color','blue');
	}
});

$("#celsius_to_fahrenheit").on('click', function(){
	var celsius = $('#temperature').val();
	celsius = parseInt(celsius);

	result=((celsius * 1.8)+32).toFixed(2);
	$("#result").html(result+"&deg;F");

	if(result>= 75){
		$('body').css('background-color','red');
	}else{
		$('body').css('background-color','blue');
	}
});


