dog_age = input("How old is your dog? ")
data_type = type(dog_age)
print(data_type)

# Typecasting an string input to an integer
human_age = int(dog_age)*7 
data_type = type(human_age)
print(data_type)

# str(human_age) is typecasting the int value of human_age to a string
print("If your dog was an human, it will be " + str(human_age) + " years old!")

# Another typecasting example, where we define a list with repeated elements
grocery_list = ['Apples', 'Oranges', 'Pears', 'Bananas', 'Apples']
print(grocery_list)
data_type = type(grocery_list)
print(data_type)

# By setting the original list with the set function, we can remove the repeated elements 
grocery_list = set(grocery_list) 
print(grocery_list)
data_type = type(grocery_list)
print(data_type)
