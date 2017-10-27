import requests
import MySQLdb
import fpdf
from requests_oauthlib import OAuth1

url = 'https://api.twitter.com/1.1/statuses/user_timeline.json'
auth = OAuth1('zzZnHnULQXrnGDGWTKNIauMpM',
              'r4Rg4mauItPW27Rm3V9pAnJranScXih8BDIbtlJ2slkproJHx7', 
              '923424557943480320-b6UUq0yU2zhBusRSkvahB7jWfulbCXi',
              'p7S2Id9UF7QFWCK72ETShM7pXxTVsetRCGQUHFP6Mzhsm')

r =requests.get(url, auth=auth)
print r.status_code

pdf = fpdf.FPDF()
pdf.add_page()
pdf.set_font("Arial", size=12)

mydb = MySQLdb.connect('localhost','root','root','TESTDB')
cursor = mydb.cursor()

for info in r.json():
    
    text = info['text'] 
    id =  info['id']
    no_of_tweets = info['user']['statuses_count']
    no_of_friends = info['user']['friends_count']
    
    pdf.cell(0, 10, "%s %s %s %s" % (id, text,
             no_of_tweets, no_of_friends),
             border=0, ln=1)
    
    cursor.execute("""REPLACE INTO TWEET VALUES(
                   '{}', '{}', '{}', '{}'
                   )""".format(id, text,no_of_tweets,
                   no_of_friends))
    
mydb.commit()    
cursor.close()
mydb.close()
pdf.output("test1.pdf")    
    
    
   
    
