items = ['Banana', 'Orange', 'Melon', 'Strawberry', 2, 4, 5, 3.14, 1.61]

# In this for loop, each iteration the elements of the items list is compared 
# with the string data type. If the item or elements of the list is an string,
# then the next command (print(item)) will be executed. The result is the printing 
# of only elements which are not an string data type.

for item in items:
    if (type(item) == str):
        continue
    print(item)


# In this for loop, each iteration the elements of the items list is compared with
# the string data type. If the item or elements of the list is an string, then 
# the next command (print(item)) will be executed. The result is the printing of
# only elements which are an string data type.

for item in items:
    if (type(item) == str):
        print(item)


# Define an integer variable num
num = 0

# While the num is less or equal 1000, the next command will be executed incrementing
# the num variable. If the num = 13, then the next command will be executed, which will
# stop (break) the while loop, stopping the increments num. The result can be saw 
# by printing the num variable, which will show each iteration up to num = 12.

while num <= 1000:
    num = num + 1
    if num == 13:
        break
    print(num) 


# The FizBuz joke made with while loop and continue properties 
num = 1

while num <= 100:
    
    num = num + 1
    
    if(num % 3 == 0 and num % 5 != 0):
        print(f'Fiz {num}')

    if(num % 3 !=0 and num % 5 == 0):
        print(f'Buz {num}')
    
    if(num % 3 == 0 and num % 5 == 0):
        print(f'FizBuz {num}')
    else:
        continue        

 


