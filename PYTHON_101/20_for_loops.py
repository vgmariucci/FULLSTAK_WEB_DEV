
fav_foods = ['Pizza', 'Tacos', 'Salmon']

for food in fav_foods:
    print(f"My fav food is: {food}")
    
for food in fav_foods:
    if food == "Pizza":
        size = input("what size of pizza would you like to eat?")
        print(f"You ordered a {size} pizza size!")
        
food = "Pizza!"

for letter in food:
    print(letter)



person = {
    "name": "John",
    "email": "john@example.com",
    "phone": "(44)9989302"
} 

for key, value in person.items():
    print(f"The key is {key} and the value is {value}")