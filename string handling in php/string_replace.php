<?php
	
echo "Jack & Jill ";
echo "<br>";
$a=str_replace("Jack","Black","Jack & Jill");
$b=str_replace("Jill","Bill", $a);

echo "The replaced string is :" . $b ;
 
?>