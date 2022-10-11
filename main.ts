function main() {
    input.buttonIsPressed(Button.A)
    radio.setGroup(42)
}

function on_received_number(receivedNumber: number) {
    if (receivedNumber == 2) {
        motion.driveStraight(30)
        led.plot(1, 1)
    }
    
}

radio.onReceivedNumber(on_received_number)
function on_received_number2(receivedNumber2: any) {
    if (receivedNumber2 == 1) {
        motion.stop()
        led.plot(2, 2)
    }
    
}

radio.onReceivedNumber(on_received_number)
