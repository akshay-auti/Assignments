from sys import argv

script, filename1, filename2  = argv

def open_file(r):
    return open(r)
    
def print_all(f):
    indata = f.read()
    print indata 
    return indata

def count_words(w):
    count = 0
    for line in w:
        words = line.split()
        count = count + len(words)
    print count
        
file1 = open_file(filename1)
indata1 = print_all(file1)
count_words(indata1)


file2 = open(filename2, 'w').write(indata1)
file2 = open_file(filename2)
indata2 = print_all(file2)
count_words(indata2)


