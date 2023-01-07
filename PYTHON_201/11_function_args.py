def add_numbers(*args):
    total = 0
    for num in args:
        total = total + num
    return total

total = add_numbers(1, 3, 5, 7, 9)
print(f"The addition result is: {total}")

def multiply_numbers(*numbers):
    result = 1
    for num in numbers:
        result = result*num
    return result

result = multiply_numbers(1, 2, 3, 4)
print(f"The multiplication result is: {result}")

