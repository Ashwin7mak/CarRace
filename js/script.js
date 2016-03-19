$(function() {
	
	// JQUERY SYNTAX
	$('p').css('color','red');
	// $('.thing').fadeOut();
	//alert("hello ??");
	
	// JQUERY EVENT METHODS
	
	$('box').click(function() {
		alert("You had clicked the box");
	});
		
	$("#box").hover(function() {
		
		$(this).text("You had submitted");
		
	},function(){
		$(this).text('You had hovered out');
	});
	
	
/* -------------------------
	JQUERY CHAINING
_______________________ */	
	
	$('.notification').delay(4000).slideDown().delay(5000).fateOut();

});


/* -------------------------
	JQUERY ANIMATE
_______________________ */	


	$('#left').click(function(){
		$('.box').animate({
			left: "-=40px"
			fontSize: "+=2px"
		},function() {
		// Animation is complete
		});	
	
});

	












