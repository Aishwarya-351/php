		var var_name="";
		var var_email="";
		var var_branch="";
		var var_skills=[];
//start of form_validation:
function form_validation()
{
	var name=document.forms["valform"]["name"].value;
	var email=document.forms["valform"]["email"].value;
	var branch=document.forms["valform"]["branch"].value;
	if(name == "" || name==null || email == "" || email==null || branch == "" || branch==null)
	{	
		alert("Name, Email and Branch are compulsory fields");
		if(name == "" || name==null)
		{
			document.forms["valform"]["name"].focus();
			return false;
		}
		if(email == "" || email==null)
		{
			document.forms["valform"]["email"].focus();
			return false;
		}
		if(branch == "" || branch==null)
		{
			return false;
		}
	}
	var email1 = document.getElementById("email").value;
    var confemail1 = document.getElementById("confemail").value;
    if(email1 != confemail1) 
	{
		alert('Email Not Matching!');
		document.forms["valform"]["confemail"].focus();
		return false;
    }
	
	var radio_buttons=document.getElementsByName("branch");
    var okay=false;
    for(var i=0,l=radio_buttons.length;i<l;i++)
    {
        if(radio_buttons[i].checked)
        {
            okay=true;
            break;
        }
    }
    if(!okay)
	{
		alert("Please check a radio button");
		return false;
	}
	
	var radio_buttons=document.getElementsByName("c1");
    var okay=false;
    for(var i=0,l=checkboxes.length;i<l;i++)
    {
        if(checkboxes[i].checked)
        {
            okay=true;
            break;
        }
    }
    if(!okay)
	{
		alert("Please check a  check box");
		return false;
	}
	else
	{
		var_name=document.getElementById("name").value;
		var_email=document.getElementById("email").value;
		
		var radio_value=document.getElementsByName("branch");
			for(var i=0,l=radio_value.length;i<l;i++)
			{
				if(radio_value[i].checked==true)
				{
					branch_value=radio_value[i].value;
				}
			}
			
		var check_value=document.getElementsByName("c1");
		var j=0;
			for(var i=0,l=check_value.length;i<l;i++)
			{
				if(check_value[i].checked==true)
				{
					skills_value[j]=check_value[i].value;
					j++;
				}
			}
			
		localStorage.setItem("name_1", var_name);
		localStorage.setItem("email_1", var_email);
		localStorage.setItem("branch_1", branch_value);
		localStorage.setItem("skills_1", JSON.stringify(skills_value));
		return true;
	}
}
//end of form_validation:

//start of get_data:
function get_data()
{
	if( localStorage.getItem("name_1")=="")
	{
		document.getElementById("access").innerHTML="Access Denied";
	}
	document.getElementById("name_show").innerHTML = localStorage.getItem("name_1");
	document.getElementById("email_show").innerHTML = localStorage.getItem("email_1");
	document.getElementById("branch_show").innerHTML = localStorage.getItem("branch_1");
	
	var skills_2 = localStorage.getItem("skills_1");
	var skills_3 = JSON.parse(skills_2);
	for(var k=0;k<skills_3.length;k++)
	{
		document.getElementById("skills_show"+k).innerHTML =  skills_3[k] +" ";
		if(k<=skills_3.length-2)
		{
				document.getElementById("comma"+k).innerHTML =  ", ";				
		}
	}
	
	document.getElementById("name_display").innerHTML =  "<b>Name: ";
	document.getElementById("email_display").innerHTML =  "<b>Email: ";
	document.getElementById("branch_display").innerHTML =  "<b>Branch:  ";
	document.getElementById("skills_display").innerHTML =  "<b>Skills: ";
	
	var d1 = document.getElementById( 'd_col3' );
	d1.style.backgroundColor = "#E6E6FA";
				
	localStorage.setItem("name_1", "");
	localStorage.setItem("email_1", "");
	localStorage.setItem("branch_1", "");
	localStorage.setItem("skills_1", "");
}
//end of get_data:

//start of checkNum:
function checkNum(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
	var numLength=age.value.length;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
	{
		if(numLength<3)
		{
			alert("Enter Number");
			return false;		
		}
	}
    return true;
}
//end of checkNum:

//start of checkRemain:
function checkRemain(evt){
	var total=200;
	var lengthText = interests.value.length;
	document.getElementById("remainChar").innerHTML = total-lengthText;
}
//end of checkRemain:

//start of checkCom:
function checkCom(evt){
	if(document.getElementById("branch1").checked == true)
	{
		document.getElementById("vlsi").checked = false;
		document.getElementById("vlsi").disabled = true;
	}
	else if(document.getElementById("branch1").checked == false && document.getElementById("checkall").checked == true) 
	{
		document.getElementById("vlsi").checked = true;
		document.getElementById("vlsi").disabled = false;
	}
	else if(document.getElementById("branch1").checked == false) 
	{
		document.getElementById("vlsi").disabled = false;
	}
}
//end of checkCom:

//start of checkAll:
function checkAll(evt){
	if(document.getElementById("checkall").checked == true)
	{
			var checkboxes1=document.getElementsByName("c1");
			for(var i=0,l=checkboxes1.length;i<l;i++)
			{
				checkboxes1[i].checked=true;
			}
			document.getElementById("uncheckall").checked = false;
	}
	if(document.getElementById("checkall").checked == false)
	{
			var checkboxes1=document.getElementsByName("c1");
			for(var i=0,l=checkboxes1.length;i<l;i++)
			{
				checkboxes1[i].checked=false;
			}
	}
	if(document.getElementById("branch1").checked)
	{
		document.getElementById("vlsi").checked = false;				
	}
}
//end of checkAll:

//start of ucheckAll:
function ucheckAll(evt){
	if(document.getElementById("uncheckall").checked == true)
	{
			var checkboxes1=document.getElementsByName("c1");
			for(var i=0,l=checkboxes1.length;i<l;i++)
			{
				checkboxes1[i].checked=false;
			}
			document.getElementById("checkall").checked = false;
	}	
}
//end of ucheckAll:

//start of checkUncheck:
function checkUncheck()
{
	if(document.getElementById("branch1").checked && document.getElementById("html").checked && document.getElementById("php").checked && document.getElementById("css").checked && document.getElementById("java").checked && document.getElementById("autocad").checked && document.getElementById("jquery").checked)
	{
		document.getElementById("checkall").checked = true;
	}
	else
	{
		document.getElementById("checkall").checked = false;
	}
	
	if(document.getElementById("html").checked || document.getElementById("php").checked || document.getElementById("css").checked || document.getElementById("java").checked || document.getElementById("vlsi").checked || document.getElementById("autocad").checked || document.getElementById("jquery").checked)
	{
		document.getElementById("uncheckall").checked = false;
	}
}
//end of checkUncheck: