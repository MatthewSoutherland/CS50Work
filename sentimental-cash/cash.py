import cs50
import math


def main():
    user_change = cs50.get_float("Change owed? ")
    total_coins = 0
    quarter = float(.25)
    dime = float(.1)
    nickel = float(.05)
    penny = float(.01)

    # confirming user_change is positive, or rebooting
    while user_change < 0:
        print("must be a postive number")
        user_change = cs50.get_float("Change owed? ")

    # get quarters
    quarters = math.floor(user_change / quarter)
    user_change -= quarters * quarter
    user_change = round(user_change, 3)

    # get dimes
    dimes = math.floor(user_change / dime)
    user_change = user_change - (dimes * dime)
    user_change = round(user_change, 3)

    # get nickels
    nickels = math.floor(user_change / nickel)
    user_change = user_change - (nickels * nickel)
    user_change = round(user_change, 3)

    # get pennies
    pennies = math.floor(user_change / penny)
    user_change = user_change - (pennies * penny)
    user_change = round(user_change, 3)

    # add coins
    total_coins = quarters + dimes + nickels + pennies
    print(total_coins)


main()