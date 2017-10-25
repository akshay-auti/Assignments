from bs4 import BeautifulSoup
import requests
import MySQLdb

page = requests.get("https://www.instagram.com/developer")
print page.status_code

soup = BeautifulSoup(page.content, 'html.parser')
rows = [row.get_text().strip() for row in soup.find_all('a')]

mydb = MySQLdb.connect('localhost','root','root','TESTDB')
cursor = mydb.cursor()

cursor.execute("""TRUNCATE TABLE Instaheading""") 

for row in rows:
    
    cursor.execute("""REPLACE INTO Instaheading(
        SUBHEADING) 
        VALUES("%s")""" % row)

mydb.commit()
cursor.close()

