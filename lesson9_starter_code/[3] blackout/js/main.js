// Together: write pseudo code
// Objective: we want to change the background color when we click on the light switch

/*
1.) Make a variable called light
2.) Set variable equal to on;
3.) Check when light is clicked aka bind a click function to the light switch
4.) If the light is off then turn it on
	-remove dark class
	-set light equal to on
5.)	Else turn light off
	-add dark class
	-set light equal to off


*/
var light = "on";

// Hint: for your condition, you'll need to look up and use the .hasClass() method. You'll want to use this as part of your condition.

// Hint #2: Refer to the syntax on the cheat sheet. The entire condition gets wrapped in parentheses. (your condition goes here)


$('#light_switch').on('click', function(){
	if(light=="on"){
		$("body").addClass('dark');
		light="off";
	}else {
		$("body").removeClass('dark');
		light ="on";
	}
});



