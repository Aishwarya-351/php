<?php
if( $_POST["string_input"] ||$_POST["string_nth"] ||$_POST["string_add"]){

$myFile = $_POST["string_input"];
$lines = file($myFile);//file in to an array
echo $lines[$_POST["string_nth"]]; //nth line
 if (isset($_POST['add'])) {
	 //add-button was clicked
		$lines[$_POST["string_nth"]]= $_POST["string_add"];
		echo "added";
    }
    elseif (isset($_POST['update'])) {
		//update-button was clicked
		$lines[$_POST["string_nth"]]= $_POST["string_add"];
		echo"updated";
    }
	elseif (isset($_POST['delete'])) {
		//delete-button was clicked
		$lines[$_POST["string_nth"]]= NULL;
		echo "deleted";
	}
    
$fp = fopen('new_file.txt', 'w');
fwrite($fp, print_r($lines, TRUE));
fclose($fp);




}
?>


<html>
   <body>
   
      <form action = "<?php $_PHP_SELF ?>" method = "POST">
	  <br><br>
         Enter the file-name with extension: <input type = "text" name = "string_input" /><br>
         Enter the number of line to be shown/added or updated: <input type = "text" name = "string_nth" /><br>
         Enter the line to be added or updated on nth position<input type = "text" name = "string_add" /><br>
		 <input type = "submit" name="add" value="add"/>	<input type = "submit" name="update" value="update" />	<input type = "submit" name="delete" value="delete" />
      </form>
   
   </body>
</html>
