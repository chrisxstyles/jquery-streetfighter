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
	});
})