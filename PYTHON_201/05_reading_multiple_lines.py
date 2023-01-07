filePath = 'C:/Users/mav1jvl/Desktop/FULLSTAK_WEB_DEV/PYTHON_201/emails.txt'

with open(filePath, 'r') as file:
    
    print('\n The command readlines() will read the lines of file and convert them into'
    + '\n a list of strings (an array)')
    content = file.readlines()

print(content)

print('\n Printing each e-mail in a line with spaces between each line\n')
for email in content:
    print(email)

print('\n Print each email in a line without spaces between each line using the rstrip() function\n')  
for email in content:
    print(email.rstrip())
    
    if 'bosch' in email:
        print('\n Filtering email with bosch in its body:\n')
        print(email)

    
