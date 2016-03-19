/*-----------------------------
			CAR RACE 2.0
-----------------------------*/

$('#go').click(function(){
	
	
	// Condition to check the if the race is complete
	function check(){
		
		if( isComplete == false){
			isComplete = true;
		}
		else {
			position = 'second';	
		}			
	}
	
	// Get width of the cars
	var carWidth = $('#car1').width();
	
	// Get width of the racetrack
	var raceTrackWidth = $(window).width() - carWidth;
	
	// Generate a random no between 1 to 5000
	var raceTime1 = Math.floor( (Math.random() * 5000) + 1);
	var raceTime2 = Math.floor( (Math.random() * 5000) + 1);
	
	// Set a flag variable to "False" --> To finish the race
	var isComplete = false;
	
	// Set a flag variable to "FIRST" --> To indicate the Winner
	var position = 'first';
	
	// To Animate car1
	$('#car1').animate({
		
		//move the car across the road
		left: raceTrackWidth
		
		
	},raceTime1, function(){
		
		//Animation is complete
		
		
		//run a function
		check();
		
		//Result of the race
		$('#raceInfo1 span').text( "Finished in " + position + " place and clocked at " + raceTime1 + " msec !" );
	});
	
	
	//To Animate Car2
	$('#car2').animate({
		
		//move the car across the road
		left: raceTrackWidth
		
		
	},raceTime2, function(){
		
		//Animation is complete
		
		
		//run a function
		check();
		
		//Result of the race
		$('#raceInfo2 span').text( "Finished in " + position + " place and clocked at " + raceTime2 + " msec !" );
	});	
});

// Reset the Race
$('#reset').click(function() {
	$('.car').css('left','0');
	$('.raceInfo span').text('');
});







