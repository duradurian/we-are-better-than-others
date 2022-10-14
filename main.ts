radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        motion.driveStraight(50)
        basic.pause(100)
        motion.stop()
    } else if (receivedNumber == 1) {
        motion.driveStraight(0)
        motion.stop()
    } else if (receivedNumber == 3) {
        motion.turnLeft(40)
        basic.pause(100)
        motion.stop()
    } else if (receivedNumber == 4) {
        motion.turnRight(40)
        basic.pause(100)
        motion.stop()
    } else {
        basic.showIcon(IconNames.No)
    }
})
radio.setGroup(42)
basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.clearScreen()
