animals = ['lion', 'cat', 'dog','cow']

for animal in animals:
    print(animal)
    
for animal in enumerate(animals):
    print(animal)
    print(type(animal))
    
for index, animal in enumerate(animals):
    # print(index, animal)
    print(f'{index+1}.\t{animal}')