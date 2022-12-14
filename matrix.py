import keyboard
import os

matrix_size = 5


def main():

    # matrix_size = 5
    a = ['#'] * matrix_size

    for i in range(matrix_size):
        a[i] = ['#'] * matrix_size

    player = '@'
    player_location = {'x': 2, 'y': 2}
    a[player_location['y']][player_location['x']] = player
    print_level(a)
    print(player_location)
    while True:
        while keyboard.read_key() == 'w':
            os.system('clear')
            go_up(player_location, a)
        while keyboard.read_key() == 's':
            os.system('clear')
            go_down(player_location, a)

        while keyboard.read_key() == 'a':
            os.system('clear')
            go_left(player_location, a)

        while keyboard.read_key() == 'd':
            os.system('clear')
            go_right(player_location, a)


def go_up(player_location, matrix):
    if player_location['y'] > 0:
        player_location['y'] -= 1
        matrix[player_location['y']][player_location['x']] = '@'
        matrix[player_location['y'] + 1][player_location['x']] = '#'
    print_level(matrix)


def go_down(player_location: dict, matrix: list):
    if player_location['y'] < matrix_size - 1:
        player_location['y'] += 1
        matrix[player_location['y']][player_location['x']] = '@'
        matrix[player_location['y'] - 1][player_location['x']] = '#'
    print_level(matrix)


def go_left(player_location, matrix):
    if player_location['x'] > 0:
        player_location['x'] -= 1
        matrix[player_location['y']][player_location['x']] = '@'
        matrix[player_location['y']][player_location['x'] + 1] = '#'
        print_level(matrix)


def go_right(player_location, matrix):
    if player_location['x'] < matrix_size - 1:
        player_location['x'] += 1
        matrix[player_location['y']][player_location['x']] = '@'
        matrix[player_location['y']][player_location['x'] - 1] = '#'
        print_level(matrix)


def print_level(matrix: list):
    os.system('clear')
    for row in matrix:
        print(row)


main()
# I like pies!
