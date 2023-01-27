radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber >= 0) {
        if (my_battle_area[receivedNumber] == 1) {
            my_battle_area[receivedNumber] = 0
            hit_y = Math.floor(receivedNumber / 5)
            hit_x = receivedNumber - 5 * hit_y
            led.unplot(hit_x, hit_y)
            radio.sendNumber(-1)
        } else {
            radio.sendNumber(-2)
        }
    } else {
        if (receivedNumber == -1) {
            hit_count += 1
            led.plot(0, 0)
            led.unplot(4, 0)
            if (hit_count == 5) {
                basic.clearScreen()
                while (true) {
                    basic.showString("You win!")
                }
            }
        } else {
            if (receivedNumber == -2) {
                led.plot(4, 0)
                led.unplot(0, 0)
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    fire_x = (fire_x + 1) % 5
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(fire_x + 5 * fire_y)
    fire_x = 0
    fire_y = 1
})
input.onButtonPressed(Button.B, function () {
    fire_y = (fire_y + 1) % 5
    if (fire_y == 0) {
        fire_y = 1
    }
})
let hit_x = 0
let hit_y = 0
let index = 0
let position_y = 0
let position_x = 0
let my_battle_area: number[] = []
let hit_count = 0
let fire_y = 0
let fire_x = 0
radio.setGroup(123)
fire_x = 0
fire_y = 1
hit_count = 0
my_battle_area = []
for (let index2 = 0; index2 < 25; index2++) {
    my_battle_area.push(0)
}
let number_of_ships = 5
while (number_of_ships > 0) {
    position_x = randint(0, 4)
    position_y = 1 + randint(0, 3)
    index = position_x + 5 * position_y
    if (my_battle_area[index] == 0) {
        my_battle_area[index] = 1
        led.plot(position_x, position_y)
        number_of_ships += 0 - 1
    }
}
