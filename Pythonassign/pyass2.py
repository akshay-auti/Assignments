import fpdf
import csv
 
class MyPDF(fpdf.FPDF, fpdf.HTMLMixin):
 
     def header(self):
        self.set_font("Arial", style="B", size=15)
        self.cell(0,10, "Welcome to PDF file", align="C")
        self.ln(20)
   
     def footer(self):
        self.set_y(-15)
        self.set_font("Arial", style="I", size=8)
        pageNum = "Page %s/{nb}" % self.page_no()
        self.cell(0, 10, pageNum, align="C")
 
if __name__ == "__main__":
    pdf = MyPDF()
    pdf.alias_nb_pages()
    pdf.add_page()
    pdf.set_font("Times", size=12)
    
    html_out = "<html><body><table align='center'><tr>"\
               "<th width=10%>fname</th>"\
               "<th width=10%>lname</th>"\
               "<th width=10%>age</th>"\
               "<th width=10%>sex</th>"\
               "<th width=10%>income</th></tr>"
    with open('test.csv') as testcsv:
        csv_data = csv.reader(testcsv)
        for row in csv_data:
            html_out += "<tr><td  width=10%>" + row[0] + \
                        "</td><td width=10%>" + row[1] + \
                        "</td><td width=10%>" + row[2] + \
                        "</td><td width=10%>" + row[3] + \
                        "</td><td width=10%>" + row[4] + \
                        "</td></tr>" 
    html_out += "</table></body></html>"
    pdf.write_html(html_out)
    pdf.output("test.pdf")

