courses = {
    'js': 'JavaScript 101',
    'python': ['Python 101', 'Python 201'],
    'html': 'HTML 101',    
}

# To access a value of an existing key in the dictionary we use .get(key, defaut),
# where the key is the key of the dictionary and defaut is some string or value you
# choose when the does not exist in the dictionary
print('\n=========================================')
print('\n When the key exists in the dictionary')
print('\n=========================================')
print(courses.get('js', None))
print(courses.get('python', None))
print(courses.get('html', None))

print('\n================================================')
print('\n When the key does not exists in the dictionary')
print('\n================================================')
# For example, the keys 'css', 'jquery' and 'react' do not exist in the dictionary
print(courses.get('css', None))
print(courses.get('jquery', False))
print(courses.get('react', 'This key does not exist in the dictionary!'))

name = "string"


