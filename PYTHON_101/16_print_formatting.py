# Three ways to formatting printings 

name = "Vinícius"

# This method was used with Python 2.
print("1st way to format printings")
welcome_message = "Hello {}, welcome to Python 101".format(name)
print(welcome_message)

# Usual way to format printings in Python 3
print("2nd way to format printings")
welcome_message = f"Hello {name}, welcome to Python 101"
print(welcome_message)

# Older versions of Python use(d) this formatting printing function
print("3rd way to format printings")
welcome_message = "Hello %s, welcome to Python 101" % name
print(welcome_message)

