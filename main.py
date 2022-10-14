def on_received_number(receivedNumber):
    if receivedNumber == 2:
        basic.show_icon(IconNames.SQUARE)
        motion.drive_straight(50)
        basic.clear_screen()
    elif receivedNumber == 1:
        basic.show_icon(IconNames.SMALL_DIAMOND)
        motion.drive_straight(0)
        motion.stop()
        basic.clear_screen()
    elif receivedNumber == 3:
        basic.show_icon(IconNames.SMALL_SQUARE)
        motion.turn_left(20)
        basic.clear_screen()
    elif receivedNumber == 4:
        basic.show_icon(IconNames.TARGET)
        motion.turn_right(20)
        basic.clear_screen()
    elif receivedNumber == 5:
        basic.show_icon(IconNames.SWORD)
        motion.drive_straight(-31)
        basic.clear_screen()
    else:
        basic.show_icon(IconNames.NO)
radio.on_received_number(on_received_number)

radio.set_group(42)
radio.set_transmit_power(7)
basic.show_icon(IconNames.YES)
basic.pause(500)
basic.clear_screen()