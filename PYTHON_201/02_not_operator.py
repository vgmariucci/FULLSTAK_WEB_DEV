something = False

# This statement is an example of the usage of the "not" operator
if not something:
    print("The variable \"something\" is False")

# The above statement is the same as the following
if something == False:
    print("The variable \"something\" is False")

names = ['vinicius', 'giovanna', 'ana', 'isa', 'sahra']

name = input('Enter a name please:')

if name not in names:
    print(f'The name {name} is not in the list of names')
else:
    print(f'The name {name} is already in the list of names')

