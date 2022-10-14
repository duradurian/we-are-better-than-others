radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.Square)
        motion.driveStraight(50)
        basic.pause(500)
        motion.stop()
        basic.clearScreen()
    } else if (receivedNumber == 1) {
        basic.showIcon(IconNames.SmallDiamond)
        motion.driveStraight(0)
        motion.stop()
        basic.clearScreen()
    } else if (receivedNumber == 3) {
        basic.showIcon(IconNames.SmallSquare)
        motion.turnLeft(40)
        basic.pause(500)
        motion.stop()
        basic.clearScreen()
    } else if (receivedNumber == 4) {
        basic.showIcon(IconNames.Target)
        motion.turnRight(40)
        basic.pause(500)
        motion.stop()
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
    }
})
radio.setGroup(42)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.clearScreen()
