<?php

$fp = file('data_reg_ass.txt');
print_r($fp);
echo "<br>";
echo "<br>";
echo "<br>";
$words = array("Indian", "Munnaf Patel", "Zaheer Khan");
$replaced_words = array("Pak", "Mohammad Amir", "Mohammad Asif");
$arr = str_replace($words, $replaced_words, $fp);

print_r($arr);
?>
