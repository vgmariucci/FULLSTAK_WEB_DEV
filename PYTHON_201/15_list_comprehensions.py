# Here are shown 2 examples of how to create a new list from an existing list

numbers = []

for num in [1, 2, 3, 4, 5, 6]:
    numbers.append(num**2)
print(numbers)

numbers = [num**2 for num in [1, 2, 3, 4, 5, 6]]
print(numbers)
