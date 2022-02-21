input.onSound(DetectedSound.Loud, function () {
    lightsOn = !(lightsOn)
    if (lightsOn) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.showLeds(`
            . . . . .
            # . . . .
            . # . . .
            . . # . #
            . . . # .
            `)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.clearScreen()
    }
})
let lightsOn = false
input.setSoundThreshold(SoundThreshold.Loud, 170)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
music.playTone(262, music.beat(BeatFraction.Half))
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) == 7) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    }
})
