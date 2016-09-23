<?php
$stockonhand = array( "large green", "small blue", "xlarge brown", "large green", "medieum yellow", "xlarge brown",  "large green");

	function my_array_count_values($array, $value){
		$counter = 0;
    foreach($array as $thisvalue) /*go through every value in the array*/
     {
           if($thisvalue === $value){ /*if this one value of the array is equal to the value we are checking*/
           $counter++; /*increase the count by 1*/
           }
     }
     return $counter;
     }
echo my_array_count_values($stockonhand, "large green")."<br>"; /*will return 3*/
echo my_array_count_values($stockonhand, "xlarge brown")."<br>"; /*will return 2*/
//print_r($result);
//print_r($newDublicatValue); */
?>