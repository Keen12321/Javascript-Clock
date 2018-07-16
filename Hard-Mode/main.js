function showTime() {
	var date = new Date()
	var h = date.getHours()
	var m = date.getMinutes()
	var s = date.getSeconds()

	if(h == 0) {
		h = 12
	}

	if (h > 12) {
		h = h - 12
	}

	if (h < 10) {
		h = "0" + h
	}

	if (m < 10) {
		m = "0" + m
	}

	if (s < 10) {
		s = "0" + s
	}

	var color = "#" + h + m + s

	document.getElementById("clock").innerHTML = color
	document.body.style.background = color

}

setInterval(showTime, 10)