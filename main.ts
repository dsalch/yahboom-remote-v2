makerbit.onIrButton(IrButton.NUM8, IrButtonAction.Pressed, function () {
    basic.showNumber(8)
})
makerbit.onIrButton(IrButton.NUM6, IrButtonAction.Pressed, function () {
    basic.showNumber(6)
})
makerbit.onIrButton(IrButton.NUM3, IrButtonAction.Pressed, function () {
    basic.showNumber(3)
})
makerbit.onIrButton(IrButton.TLeft, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, speed)
})
makerbit.onIrButton(IrButton.Light, IrButtonAction.Pressed, function () {
    if (lights) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
        lights = 0
    } else {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
        lights = 1
    }
})
makerbit.onIrButton(IrButton.NUM9, IrButtonAction.Pressed, function () {
    basic.showNumber(9)
})
makerbit.onIrButton(IrButton.NUM7, IrButtonAction.Pressed, function () {
    basic.showNumber(7)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, speed)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, speed)
})
makerbit.onIrButton(IrButton.Minus, IrButtonAction.Pressed, function () {
    speed += -10
    if (speed < 0) {
        speed = 0
    }
    led.plotBarGraph(
    speed,
    250
    )
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, speed)
})
makerbit.onIrButton(IrButton.NUM4, IrButtonAction.Pressed, function () {
    basic.showNumber(4)
})
makerbit.onIrButton(IrButton.NUM2, IrButtonAction.Pressed, function () {
    basic.showNumber(2)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, speed)
})
makerbit.onIrButton(IrButton.NUM5, IrButtonAction.Pressed, function () {
    basic.showNumber(5)
})
makerbit.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
    basic.clearScreen()
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.NUM1, IrButtonAction.Pressed, function () {
    basic.showNumber(1)
})
makerbit.onIrButton(IrButton.NUM0, IrButtonAction.Pressed, function () {
    basic.showNumber(0)
})
makerbit.onIrButton(IrButton.BEEP, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.playTone(784, music.beat(BeatFraction.Quarter))
})
makerbit.onIrButton(IrButton.TRight, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, speed)
})
makerbit.onIrButton(IrButton.Plus, IrButtonAction.Pressed, function () {
    speed += 10
    if (speed > 250) {
        speed = 250
    }
    led.plotBarGraph(
    speed,
    250
    )
})
let lights = 0
let speed = 0
makerbit.connectIrReceiver(DigitalPin.P8)
speed = 100
lights = 0
