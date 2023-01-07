# List of names
names = ['Kalob', 'Kel', 'Vinicius']

# Dictionary of car properties
carProperties = {
    "Brands": "BMW",
    "Models": "X6",
    "Colors": "BLUE",
}

def checkName(name):
    if name in names:
        print(f'{name} is in the list of names')
    else:
        print(f'{name} is not in the list of names')

def checkCarBrand(brand):
    if brand in carProperties.values():
        print(f'{brand} is in the list of car properties')
    else:
        print(f'{brand} is not in the list of car properties')

def checkCarModel(model):
    if model in carProperties.values():
        print(f'{model} is in the list of car properties')
    else:
        print(f'{model} is not in the list of car properties')

def checkCarColor(color):
    if color in carProperties.values():
        print(f'{color} is in the list of car properties')
    else:
        print(f'{color} is not in the list of car properties')


yourName = input("What is your name?")
yourCarBrand = input("What's the brand of your car?")
yourCarModel = input("What's the model of your car?")
yourCarColor = input("What's the color of your car?")

checkName(yourName)
checkCarBrand(yourCarBrand.upper())
checkCarModel(yourCarModel.upper())
checkCarColor(yourCarColor.upper())

