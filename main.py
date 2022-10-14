def on_received_number(receivedNumber):
    if receivedNumber == 2:
        motion.drive_straight(50)
        basic.pause(100)
        motion.stop()
    elif receivedNumber == 1:
        motion.drive_straight(0)
        motion.stop()
    elif receivedNumber == 3:
        motion.turn_left(40)
        basic.pause(100)
        motion.stop()
    elif receivedNumber == 4:
        motion.turn_right(40)
        basic.pause(100)
        motion.stop()
    else:
        basic.show_icon(IconNames.NO)
radio.on_received_number(on_received_number)

radio.set_group(42)
basic.show_icon(IconNames.YES)
basic.pause(500)
basic.clear_screen()