input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(qwiicmotor.readRegister(qwiicmotor.qwiicmotor_eADDR(qwiicmotor.eADDR.Motor_x5D), qwiicmotor.qwiicmotor_eRegister(qwiicmotor.eRegister.DRIVER_ENABLE)))
})
qwiicmotor.beimStart_joy(qwiicmotor.qwiicmotor_eADDR_joy(qwiicmotor.eADDR_joy.Joystick_x20))
qwiicmotor.init(qwiicmotor.qwiicmotor_eADDR(qwiicmotor.eADDR.Motor_x5D))
if (qwiicmotor.getStatus(qwiicmotor.qwiicmotor_eADDR(qwiicmotor.eADDR.Motor_x5D), qwiicmotor.eStatus.ready)) {
    basic.showIcon(IconNames.Yes)
} else {
    basic.showIcon(IconNames.No)
}
loops.everyInterval(400, function () {
    qwiicmotor.driveJoystick(qwiicmotor.qwiicmotor_eADDR(qwiicmotor.eADDR.Motor_x5D), qwiicmotor.qwiicmotor_readJoystick(qwiicmotor.qwiicmotor_eADDR_joy(qwiicmotor.eADDR_joy.Joystick_x20)))
})
