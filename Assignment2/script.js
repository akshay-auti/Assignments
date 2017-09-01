
function validateform(){
event.preventDefault();
var fname=document.myform.firstname.value;

var lname=document.myform.lastname.value;
var phoneno=document.myform.phone.value;
var officeno=document.myform.office.value;
var email=document.myform.email.value;
var password=document.myform.password.value;
var cpassword=document.myform.cpassword.value;
         var day=document.myform.day.value;
         var month=document.myform.month.value;
         var year=document.myform.year.value;


// var age=document.myform.age.value;
var genders=document.getElementsByName('gender[]');
var options=document.getElementsByName("options[]");
var aboutu=document.myform.comment.value;


// for firstname
if (fname==null || fname==""){
  alert("Firstname can't be blank");
  return false;
}
 //for lastname
else if(lname==null || lname==""){
  alert("Lastname can't be blank");
  return false;
}
//for phone no
 else if(phoneno==null || phoneno=="" || isNaN(phoneno) || phoneno.length!=10){
  alert("Enter valid 10 digit no");
  return false;
}
//for office no
else if(isNaN(officeno)){
  alert("Enter valid office no");
  return false;
}
//for Email
else if(email.indexOf("@")<1 || email.lastIndexOf(".")<email.indexOf("@")+2 || email.lastIndexOf(".")+2>=email.length || email==null || email==""){
  alert("enter valid emailid");
  return false;
}
else if(password.length<8 ||password.length>12 || password==null || password==""){
    alert("Password must be  between 8 to 12 characters long.");
  return false;
}
else if (cpassword==null || cpassword=="" || cpassword!=password) {
    alert("Password must be same");
    return false;
}
else if(day==null || month==null || year==null){
  alert("select date of birth");
  return false;
}
else if (aboutu==null || aboutu==""){
  alert("write appropriate comment");
  return false;
}
 else if(options[0].checked==false && options[1].checked==false && options[2].checked==false) {
        alert('Please check at least one of the options.');
        return false;
}
else if (genders[0].checked == false && genders[1].checked==false) {
                    alert("select your gender");

                    return false;
}

else{

   return true;
 }

}
function calculate_age(month,day,year)
{
    today_date = new Date();
    today_year = today_date.getFullYear();
    today_month = today_date.getMonth();
    today_day = today_date.getDate();
    age = today_year - year;

    if ( today_month < (month - 1))
    {
        age--;
    }
    if (((month - 1) == today_month) && (today_day < day))
    {
        age--;
    }
    return age;
}