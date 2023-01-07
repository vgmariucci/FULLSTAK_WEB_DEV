# An example of a function that returns an exponential value
def exp(num1, num2):
    total = num1 ** num2
    return total

result = exp(4,4)

print(result)


# Anothe example of a function that prints an invitation given two arguments
# passed by two input variables (name and food)
def invitation(name, food):
    print(f"Hello {name}, let's eat some {food}")

name = input("What is your name?")
food = input("What is your favorite food?")

invitation(name, food)


    