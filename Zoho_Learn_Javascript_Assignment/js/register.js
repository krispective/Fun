
function show_alert() { 
var validate_nom = document.getElementById("nameofmember").value;
var validate_dob = document.getElementById("dob").value;
var male_id=document.getElementById("male");
var female_id =document.getElementById("female");
var gender_value;
var validate_mobno = document.getElementById("mobno").value;
var name_regex = /^[A-Za-z ]{3,20}$/;
var name_regex_two_alphabets = /^[A-Za-z]{1,2}$/;
var dob_regex = /^(0?[1-9]|[12][0-9]|[3][0-1])[/](0?[1-9]|1[0-2])[/]([1]?[8-9][0-9]{2}|2[0][0-1][0-7])$/;
var mobno_regex = /^[7-9][0-9]{9}$/;
var c1,c2,c3,c4;
c1=1;c2=1;c3=1;c4=1;
//validation for name feild

if(validate_nom=="")
{
	document.getElementById("name_error").innerHTML="*Mandatory field Empty";c1=0;
}
else if(validate_nom.match(name_regex))
{
document.getElementById("name_error").innerHTML="";c1=1;
}
else if(validate_nom.match(name_regex_two_alphabets))
{
	document.getElementById("name_error").innerHTML = "*Name must have atleast 3 characters";
}
else
{
	document.getElementById("name_error").innerHTML="*Name can contain only alphabets and space.";c1=0;
}


//validation for date of birth field
if(validate_dob=="")
{
	document.getElementById("dob_error").innerHTML="*Mandatory field Empty";c2=0;
}
else if(validate_dob.match(dob_regex))
{
	document.getElementById("dob_error").innerHTML="";c2=1;
}
else
{
	document.getElementById("dob_error").innerHTML="*Must be of the format DD/MM/YYYY";c2=0;
}

//validation for gender radio button

if(document.getElementById("male").checked===true)
{
	gender_value="male";
	document.getElementById("gender_error").innerHTML="";c3=1;
}
else if(document.getElementById("female").checked===true)
{
gender_value="female";
	document.getElementById("gender_error").innerHTML="";c3=1;  
}
else
{
	document.getElementById("gender_error").innerHTML="*Mandatory field Empty";c3=0;
}

//validation for mobile number
if(validate_mobno=="")
{
	document.getElementById("mobno_error").innerHTML="*Mandatory field Empty";c4=0;
}
else if(validate_mobno.match(mobno_regex))
{
document.getElementById("mobno_error").innerHTML="";c4=1;

}
else
{
	document.getElementById("mobno_error").innerHTML="*Mobile number not valid";c4=0;
}
//alert(validate_nom+", you are a "+gender_value+" who was born on "+validate_dob+" and your phone number is "+validate_mobno);
if((c1==1 && c3==1) && (c4==1 && c2==1))
	{alert(validate_nom+", you are a "+gender_value+" who was born on "+validate_dob+" and your phone number is "+validate_mobno+". Thank you registering.");
document.getElementById("username").innerHTML=validate_nom;
}
}

