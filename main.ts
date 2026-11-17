let A = 0
for (let index = 0; index < 5; index++) {
    led.plot(2, A)
    basic.pause(200)
    basic.clearScreen()
    A += 1
}
basic.forever(function () {
	
})
