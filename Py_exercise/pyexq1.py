n = int(raw_input("Enter any number: "))

for i in range(n):
    for j in range(n):
        if(i == j or j == (n-i-1)):
            print "*",
        else:
            print "_",
    print ' '             
        


