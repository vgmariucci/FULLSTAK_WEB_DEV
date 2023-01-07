# When reading or writing a file with python using vscode, it was necessary
# passing the full path where the file is or will be located.

# When we are writing a file with python, if the file doesn't exist yet, then we
# need to indicate where we want to create such file and choose the name and 
# extension of the file. 
# 
# In the following example we indicate the file path, its name and extension.
# Lastly, we written the text "Hello, this is..." into the file

filePath = 'C:/Users/mav1jvl/Desktop/FULLSTAK_WEB_DEV/PYTHON_201/'

with open(filePath + 'writing_files.txt', 'w') as file:
    
    file.write("Hello from Python 201!\nThis is file created by Python's Writing File Method\n")

# Appending a new text to the created file
with open(filePath + 'writing_files.txt', 'a') as file:
    file.write("\nThis line was created by appending this text to the created file")