lst = ["String", 1, 3.14, ["A new item"], "Vinícius"]

print(lst)

for i in lst:
    print(i)


def printListOfNames(listVariable):

    for i in listVariable:
        print(i)


print("Printing the original list of names: ")
lstOfNames = ["name1", "name2", "name3"]
printListOfNames(lstOfNames)

print("Printing the 1st modification in the list of names: ")
lstOfNames.append("name4")
printListOfNames(lstOfNames)

print("Printing the 2st modification in the list of names: ")
lstOfNames.remove("name1")
printListOfNames(lstOfNames)