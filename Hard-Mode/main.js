// function showTime() {
// 	var date = new Date()
// 	var h = date.getHours()
// 	var m = date.getMinutes()
// 	var s = date.getSeconds()

// 	if(h == 0) {
// 		h = 12
// 	}

// 	if (h > 12) {
// 		h = h - 12
// 	}

// 	if (h < 10) {
// 		h = "0" + h
// 	}

// 	if (m < 10) {
// 		m = "0" + m
// 	}

// 	if (s < 10) {
// 		s = "0" + s
// 	}

// 	var color = "#" + h + m + s

// 	document.getElementById("clock").innerHTML = color
// 	document.body.style.background = color

// }

// setInterval(showTime, 50)


function colorWheel() {
	var color = '#'
	var numbers = '0 1 2 3 4 5 6 7 8 9 A B C D E F'
	for (var i = 0; i < 6; i++) {
    color += numbers[Math.floor(Math.random() * 16)]
  }
  return color
}

setInterval(colorWheel, 1000)

document.body.style.background = colorWheel()
