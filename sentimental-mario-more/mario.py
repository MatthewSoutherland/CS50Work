import cs50

# create variables to run program
i = 0
user_height = cs50.get_int("How tall should the pyramid be? ")
my_pyramid = ""

# specifications are a number between 1 and 8
while user_height < 1 or user_height > 8:
    user_height = cs50.get_int("Height is between 1 and 8? ")

# create a pyramid
while i < user_height:
    i += 1
    my_pyramid = " " * (user_height - i)
    my_pyramid += "#" * (i)
    my_pyramid += "  "
    my_pyramid += "#" * (i)
    print(my_pyramid)