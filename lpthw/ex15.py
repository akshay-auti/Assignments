from sys import argv

script, filename = argv

print "Here' your file %s" % filename

txt = open(filename)

print txt.read()

print "Enter filename Again"
file_again = raw_input('> ')

txt_again = open(file_again)
print txt_again.read()
