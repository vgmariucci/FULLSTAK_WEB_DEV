# Comparison shortcuts don't need comparison symbols to work

something = None # None means nothing or false

if something:
    print ("This is true")
else:
    print ("This is false")

otherthing = "" # Empty string means nothing or false and a not empty string means true

if otherthing:
    print ("This is true")
else: 
    print ("This is false")