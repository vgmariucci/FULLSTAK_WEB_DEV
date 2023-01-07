# In this Python 101 final project I developed the RPS (Rock, Paper and Scissor) game
# using some of the tools learned on the preceding lessons like: 

# definition of functions in Python
# while loop
# if, elif and else statements
# comparison operators
# print formatting
# break and continue
# random choices
# variables defined by keyboard input

# Importing the library random
import random as rdm

# Defining the list with choices of the game
choices = ["Rock", "Paper", "Scissor"]

# Defining a boolean variable to register the status of the game (if we win or lose)
winner = False

# Defining of the function which will be called to turn the game on based on 
# our choice and the randomly generated choice for the computer
def joke(myChoice):
    
    # When the computer draw the same item as you
    if computersChoice == myChoice:
        print('No winner')
        winner = False

    # Rock and Paper
    if (computersChoice == 'rock' and myChoice == 'paper'):
        print('You won!')
        winner = True
    elif(computersChoice == 'paper' and myChoice == 'rock'):
        print('You lost!')
        winner = False
        
    # Rock and Scissor
    if (computersChoice == 'rock' and myChoice == 'scissor'):
        print('You lost!')
        winner = False
    elif(computersChoice == 'scissor' and myChoice == 'rock'):
        print('You won!')
        winner = True
        
    # Paper and Scissor
    if (computersChoice == 'paper' and myChoice == 'scissor'):
        print('You won!')
        winner = True
    elif(computersChoice == 'scissor' and myChoice == 'paper'):
        print('You lost!')
        winner = False

    # The function returns the winner status to the while loop
    return winner

# The while loop keeps rolling until the winner is determined
while True:
    # Ask you to enter your choice     
    yourChoice = input('Please enter your choice:')
    
    # Draw the computer's choice
    computersChoice = rdm.choice(choices).lower()
    # Show the computer's choice
    print(f"Computer's choice: {computersChoice}")
    
    # Call the function joke passing as argument your choice and returning 
    # the result back to the winner variable
    winner = joke(yourChoice.lower())  
    
    # If you win the game, then this statement will be true and will be
    # executed, printing "End of the game!"
    if(winner == True):
        print("End of the game!")
        break
    # If the above statement is false, then the game keeps on rolling until you win
    else:
        continue
        
    
