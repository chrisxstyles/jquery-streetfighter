$(document).ready(function() {
	$('.ryu').mouseenter(function(){
		//alert('mouse entered .ryu div')
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		//alert('mouse left');
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		//console.log('mousedown');
		//plan hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		// animate the hadouken to the right of the screen
	})
	.mouseup(function(){
		//console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})
})