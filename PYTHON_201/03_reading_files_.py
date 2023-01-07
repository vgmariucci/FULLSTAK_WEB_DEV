# In the Ultimate Fullstack course, the trainer used just the name of the file, 
# "readme.txt" in the open command line: 
# 
# with open('readme.txt', 'r') as file...
# 
# Without passing the entire file path to the open command  in vscode with Windows,
# it didn't work. So, I passed the entire file path!

# This code was tested with Spyder conda and it works pretty well using just 
# the name of the file "readme.txt" instead of the full path of the file, like in the
# video class. 

filePath = 'C:/Users/mav1jvl/Desktop/FULLSTAK_WEB_DEV/PYTHON_201/readme.txt' 

with open(filePath, 'r') as file:
 
    content = file.read()

print('The content of the file is:')  
print(content)
