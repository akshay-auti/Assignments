forward = []
backward = []

while(len(forward) < 3):
    item = raw_input("Input a string: ")
    forward.append(item)
    backward.insert(0, item)
    if item == " ":
      break

print forward
print backward

forward.reverse()
print forward

