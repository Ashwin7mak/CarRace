/* -------------------------
	JQUERY ANIMATE
_______________________ */	

$(function() {
	$('#left').click(function(){
		$('.box').animate({
			left: "-=50px",
			fontSize: "+=3px"
		}, function(){
			// Animate is complete
		});

	});
	
	$('#up').click(function(){
		$('.box').animate({
			top: "-=50px",
			opacity: "+=0.5"
		}, function(){
	
		});

	});
	
	$('#right').click(function(){
		$('.box').animate({
			left: "+=50px",
			fontSize: "-=3px"
		}, function(){
	
		});

	});
	
	$('#down').click(function(){
		$('.box').animate({
			bottom: "-=50px",
			opacity: "-=0.5"
		}, function(){
	
		});

	});
	
	
	
	
	
	
	
	
	
	
	
	
});
	
	
	
	


