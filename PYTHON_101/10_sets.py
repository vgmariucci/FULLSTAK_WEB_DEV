# sets are like lists, but they don't keep its order like lists or tuples.
s = {"item1","item2", "item2", "item3"}

# For example, the set defined above has two item2 elements. When we print the set,
# the repeated elements are considered to be only one, and the order of the elements
# don't keep its original typed position
print(s)

s.add("item4")
print(s)

s.update("item5")
print(s)

s.remove("item4")
print(s)

s.discard("item1")
print(s)

s.clear()
print(s)