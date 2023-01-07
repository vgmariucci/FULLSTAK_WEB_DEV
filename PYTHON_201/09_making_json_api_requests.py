import requests

req = requests.get('https://swapi.dev/api/people/1/')

print(req.status_code)

person = req.json()

print(person)

personName = person['name']
personMass = person['mass']

print(f'Name is:\t\t {personName}')
print(f'Mass is:\t\t {personMass} kg')

print("Films involved in:")
for film in person['films']:
    req = requests.get(film)
    film = req.json()
    print("Film is: ", film['title'])