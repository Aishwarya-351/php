 <?php
$var_name =$_POST['name'];
$var_marks =$_POST['marks'];
/* if (isset($_POST['marks']))
 {
    echo "Yes, marks is set";    
	}
else
	{  
    echo "N0, marks is not set";
	} */

if($var_marks >800)
	echo "user name with" . " " . $var_name ." "."has got distinction"; 

if($var_marks >500 && $var_marks <800)
	echo "user name with". " " . $var_name ." " ."has got first class"; 

if($var_marks >400 && $var_marks <500)
	echo "user name with " ." " . $var_name ." " ."has got pass class";
if($var_marks <400 )
	echo "user name with" ." " . $var_name ." "."has failed";

	?>