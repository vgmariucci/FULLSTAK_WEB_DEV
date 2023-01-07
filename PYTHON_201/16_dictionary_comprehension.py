# Here are presented 3 examples of how to create dictionaries from a list

person = [('name', 'Vincius'), ('occupation', 'Professor'), ('hobby', 'Electronics')]
print(person)
print(type(person))

d = {}

for key, value in person:
    d[key] = value
print(d)
print(type(d))

d = {key: value for key, value in person}
print(d)
print(type(d))

d = dict(person)
print(d)
print(type(d))
    