$(document).ready(function() {
	function playHadouken(){
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}
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
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '300px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '-212px');
			}
		);
	})
	.mouseup(function(){
		//console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	$(document).keydown(function(e){
		if (e.keyCode == 88){
			//console.log("x pressed")
			// is there another way than assigning ryu-action to the div class??
			$('.ryu-action').hide();
			$('.ryu-cool').show();
		}
	})
})