a = [3,7,1,9,0,1,22]

listlen = len(a)
sort = sorted(a)
#print sort

i = 0
while(i <= listlen/2):
    print sort[i],
    i = i + 1
    
j = listlen - 1
while(j > listlen/2):
    print sort[j],
    j = j - 1
    
