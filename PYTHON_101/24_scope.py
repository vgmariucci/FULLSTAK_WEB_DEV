# Scope is defined by the accessibility of variables defined along the code. There is
# global variables and local variables. Global variables are accessible through all
# the code, but local variables are accessible only inside the function where they 
# were defined.

name_2 = "Jorge"

def func(name):
    name_2 = "VG"
    return name

print(func("vinicius"))

# name_2 is accessible only inside the function where it was defined (i.e. inside func(name))
print(name_2)

