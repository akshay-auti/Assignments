my_dict = {'vinay': 1234, 'vineet': 3456, 'rahul': 5678, 'saurabh': 7890}

username = raw_input("Enter username: ")
passward = raw_input("Enter passward: ")

#print my_dict.keys()
#print my_dict.values()
if username in my_dict.keys():
    
    if(passward == str(my_dict[username])):
        print "login successfully"
    else:
        print "Passward is wrong!"
else:
     print "please enter valid username!"           
        
                
