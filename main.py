def main():
    input.button_is_pressed(Button.A)
    radio.set_group(42)
    
def on_received_number(receivedNumber):
    if receivedNumber == 2:
     motion.drive_straight(30)
     led.plot(1, 1)
radio.on_received_number(on_received_number)

def on_received_number2(receivedNumber2):
    if receivedNumber2 == 1:
      motion.stop()
      led.plot(2, 2)
radio.on_received_number(on_received_number)