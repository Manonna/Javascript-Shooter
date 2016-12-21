var screenWidth  = $(document).width()
var screenHeight = $(document).height()

$(document).ready(function () {
	createDucks(10)
})

function createDucks (count) {
	var delay = 0

	for (var i = 0; i < count; i++) {
		var duck = $('<img src="ducky.png">')
		duck.css({
			position: 'absolute',
			left: 	  0,
			top: 	  Math.floor(Math.random() * (screenHeight - Math.floor(screenHeight / 5))),
			width: 	  '150px'
		})
		duck.appendTo('#duck')
		delay = delay + 800
		duck.hide().delay(delay).show(1).
			animate({"left": screenWidth}, 
			{
			duration: 5000,
			easing:   "linear",
			complete: function(){
				$(this).remove()
			}
		})
		duck.click(function() {
			$(this).remove()
		})
	}
}