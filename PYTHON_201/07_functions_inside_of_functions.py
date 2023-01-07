def thing1(name):
    print("This is thing 1", name)
    
    def thing2():
        print("This is thing 2", name)
    thing2()



# Besides the name of this variable is the same of the variable defined in the
# function thing1(name), it is not accessible by the function thing1() nor by
# the function thing2(). The reciprocal is true, the variable "name" defined in
# the function thing1(name) is not accessible outside of the function where it was 
# defined. Instead the nested functions inside thing1(name) can access the variable
# "name". This is another example of scope!
name = input("What is your name?")

thing1(name)