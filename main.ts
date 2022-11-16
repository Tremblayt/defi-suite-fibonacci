let infini = 1
let Ancien_1 = 0
let Ancien_2 = 1
let nouveau = 1
basic.forever(function () {
    basic.showNumber(0)
    basic.showNumber(1)
    while (infini == 1) {
        nouveau = Ancien_1 + Ancien_2
        basic.showNumber(Ancien_1 + Ancien_2)
        basic.pause(1000)
        Ancien_2 = Ancien_1
        Ancien_1 = nouveau
        basic.clearScreen()
    }
})
