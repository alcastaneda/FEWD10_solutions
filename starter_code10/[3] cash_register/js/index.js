// Create a global variable for the total
var total = 0;
// Create a function you can run when you submit the field Hint: .submit() in jQuery
$('button').on('click', function(){
	var input = $('#newEntry').val();
	input = parseFloat(input);
	input = convertsToCurrency(input);

	$('#entries').append("<th>"+input+"</th>");

	total = total + parseFloat(input);

	$('#total').html("$"+total);
	console.log(total);
});
// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

function convertsToCurrency(num1){
	var currency = num1.toFixed(2);
	return currency
};
// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)



