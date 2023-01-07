filePath = "C:/Users/mav1jvl/Desktop/FULLSTAK_WEB_DEV/PYTHON_201/"

fileName = input("What is the file name? ")
fileExtension = input("Extension of the file?")
content  = input("What is the file content? ")

with open(filePath + fileName + fileExtension, 'w') as file:
    file.write(content)
    
    
openFile = input("Would you like to open the file?")
if openFile in ['y', 'n']:
    if openFile == 'y':
        with open(filePath + fileName + fileExtension, 'r') as file:
            print(file.read())

