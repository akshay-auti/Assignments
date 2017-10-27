import os
import MySQLdb

db = MySQLdb.connect("localhost","root","root","TESTDB")
cursor = db.cursor()
cursor.execute("select * from EMPLOYEE")
results = cursor.fetchall()

path ="File"
if not os.path.exists(path):
    os.mkdir(path)

filename = os.path.join(path,"testfile.txt")
file = open(filename,'a')

for row in results:
  file.write(str(row)) 


file.close()     
cursor.close()
db.close()    
