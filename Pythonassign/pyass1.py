import csv
import MySQLdb

mydb = MySQLdb.connect('localhost','root','root','TESTDB')
cursor = mydb.cursor()

csv_data = csv.reader(file('test.csv'))
for row in csv_data:

    cursor.execute("""INSERT INTO EMPLOYEE(
        FIRST_NAME, LAST_NAME, 
        AGE, SEX, INCOME) 
        VALUES(%s, %s, %s, %s, %s)""", row)

mydb.commit()
cursor.close()

