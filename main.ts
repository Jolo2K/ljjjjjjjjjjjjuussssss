let Ljus = 0
input.onButtonPressed(Button.A, function () {
    Ljus = input.lightLevel()
    if (Ljus < 86) {
        basic.showString("Dark side of the force")
    } else if (Ljus < 181) {
        basic.showString("Oki, Doki")
    } else {
        basic.showString("Bright Light")
    }
})
