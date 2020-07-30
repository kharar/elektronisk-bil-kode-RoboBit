let Throttle = 0
for (let index = 0; index < 3; index++) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . # . # .
        `)
    music.playMelody("E D G F B A C5 B ", 1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
for (let index = 0; index < 1; index++) {
    // stop -> forlæns
    for (let index = 0; index <= 50; index++) {
        Throttle = 50 - index
        robotbit.GeekServo(robotbit.Servos.S1, Math.map(Throttle, 0, 100, -45, 225))
        robotbit.GeekServo(robotbit.Servos.S2, Math.map(100 - Throttle, 0, 100, -45, 225))
        robotbit.GeekServo(robotbit.Servos.S3, Math.map(Throttle, 0, 100, -45, 225))
        robotbit.GeekServo(robotbit.Servos.S4, Math.map(100 - Throttle, 0, 100, -45, 225))
        basic.pause(20)
    }
    basic.pause(3000)
    // forlæns -> stop
    for (let index = 0; index <= 50; index++) {
        Throttle = index
        robotbit.GeekServo(robotbit.Servos.S1, Math.map(Throttle, 0, 100, -45, 225))
        robotbit.GeekServo(robotbit.Servos.S2, Math.map(100 - Throttle, 0, 100, -45, 225))
        robotbit.GeekServo(robotbit.Servos.S3, Math.map(Throttle, 0, 100, -45, 225))
        robotbit.GeekServo(robotbit.Servos.S4, Math.map(100 - Throttle, 0, 100, -45, 225))
        basic.pause(20)
    }
    basic.pause(3000)
    // stop -> baglæns
    for (let index = 0; index <= 50; index++) {
        Throttle = index + 50
        robotbit.GeekServo(robotbit.Servos.S1, Math.map(Throttle, 0, 100, -45, 225))
        robotbit.GeekServo(robotbit.Servos.S2, Math.map(100 - Throttle, 0, 100, -45, 225))
        robotbit.GeekServo(robotbit.Servos.S3, Math.map(Throttle, 0, 100, -45, 225))
        robotbit.GeekServo(robotbit.Servos.S4, Math.map(100 - Throttle, 0, 100, -45, 225))
        basic.pause(20)
    }
    basic.pause(3000)
    // baglæns -> stop
    for (let index = 0; index <= 50; index++) {
        Throttle = 100 - index
        robotbit.GeekServo(robotbit.Servos.S1, Math.map(Throttle, 0, 100, -45, 225))
        robotbit.GeekServo(robotbit.Servos.S2, Math.map(100 - Throttle, 0, 100, -45, 225))
        robotbit.GeekServo(robotbit.Servos.S3, Math.map(Throttle, 0, 100, -45, 225))
        robotbit.GeekServo(robotbit.Servos.S4, Math.map(100 - Throttle, 0, 100, -45, 225))
        basic.pause(20)
    }
}
music.playMelody("E D G F B A C5 B ", 1000)
basic.forever(function () {
    for (let index = 0; index < 1; index++) {
        // stop -> forlæns
        for (let index = 0; index <= 50; index++) {
            Throttle = 50 - index
            robotbit.GeekServo(robotbit.Servos.S1, Math.map(Throttle, 0, 100, -45, 225))
            robotbit.GeekServo(robotbit.Servos.S2, Math.map(100 - Throttle, 0, 100, -45, 225))
            robotbit.GeekServo(robotbit.Servos.S3, Math.map(Throttle, 0, 100, -45, 225))
            robotbit.GeekServo(robotbit.Servos.S4, Math.map(100 - Throttle, 0, 100, -45, 225))
            basic.pause(20)
        }
        basic.pause(3000)
        // forlæns -> stop
        for (let index = 0; index <= 50; index++) {
            Throttle = index
            robotbit.GeekServo(robotbit.Servos.S1, Math.map(Throttle, 0, 100, -45, 225))
            robotbit.GeekServo(robotbit.Servos.S2, Math.map(100 - Throttle, 0, 100, -45, 225))
            robotbit.GeekServo(robotbit.Servos.S3, Math.map(Throttle, 0, 100, -45, 225))
            robotbit.GeekServo(robotbit.Servos.S4, Math.map(100 - Throttle, 0, 100, -45, 225))
            basic.pause(20)
        }
    }
})
