# This one is like your scripts with argv
def print_two(*args):
    arg1, arg2, arg3 = args
    print "arg1: %r, arg2: %r, arg3: %r" % (arg1, arg2, arg3)
    
# ok, that *args is actually pointless, we can just do this 
def print_two_again(arg1, arg2):
    print "arg1: %r, arg2: %r" % (arg1, arg2)
    
# this just take one arguments 
def print_one(arg1):
    print "arg1: %r" % arg1
    
# this one takes no arguments
def print_none():
    print "I got nothing."
    

print_two("Zed","Shaw", "Show")
print_two_again("Zed", "Shaw")
print_one("First!")
print_none()               
