<?php
/**
 * PHP GD
 * create a simple image with GD library
 * 
 */

 //setting the image header in order to proper display the image
header("Content-Type: image/png");

//try to create an image
$im = @imagecreate(900, 900)
    or die("Cannot Initialize new GD image stream");
	
//set the background color of the image
$background_color = imagecolorallocate($im, 255, 255, 255);

//set the color for the text
$text_color = imagecolorallocate($im, 0, 0, 0);

//adf the string to the image
imagestring($im, 5, 320, 300,  "Cybage Software Pvt. ltd", $text_color);

//to underline the text
//imagettftext($im, 5, 320, 300, 21, $imagestring);


//outputs the image as png
imagepng($im);

//frees any memory associated with the image 
imagedestroy($im);

?>