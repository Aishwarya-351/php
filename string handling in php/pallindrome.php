

// using the strrev function


<?php
$string = 'liril';  
echo 'String: <b>' . $string . '</b>';
$reverse = strrev($string); 
if ($string == $reverse) 
echo ' is a palindrome';
else
echo ' is not a palindrome'


?>


// without using strrev function
<?php

$string = "liril"; 
echo "String: <b> " . $string."</b>";
$Array = array(); 
$Array = str_split($string); 
$len = sizeof($Array); 
$string2 = "";

for ($i = $len; $i >= 0; $i--) {
    $string2.=$Array[$i];
}

if ($string == $string2)
{    echo "Output: " . $string . " is a palindrome";		}
else 
{	echo "Output: " . $string . " is not a palindrome";	}



?>