# if, elif and else decision statements 

name = input("What is your name? ")

age = int(input("How old are you? "))

if (name == "Vinícius"):
    print (f"Hi {name}, welcome to Python 101")
elif (name == "Jorge"):
    print(f"Hi {name}, you are not enrolled in this Python course")
else: 
    print("Hi, this name is not listed in if statements conditions")


if(age >= 18):
    print (f"The age {str(age)} is allowed to drink alcoholic beers")
else:
    print(f"The age {str(age)} is not allowed to drink alcohol")


print("\n An example of different conditions used in if statements")

wavelength = int(input("Type the value of the wavelength in nanometers (nm): "))

if(wavelength < 400):
    print (f"\n The wavelength {str(wavelength)} is in the ultraviolet range")
    
elif(wavelength >= 400 and wavelength <= 700):
    print(f"\n The wavelength {str(wavelength)} is in the range of visible light")

else:
    print(f"\n The wavelength {str(wavelength)} is in the range of infrared light")

    