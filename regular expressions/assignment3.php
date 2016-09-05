<?php

if( $_GET["mail"] ) 
{
$email = $_GET["mail"];
$regexp = "/^[^0-9][A-z0-9_]+([.][A-z0-9_]+)*[@][A-z0-9_]+([.][A-z0-9_]+)*[.][A-z]{2,4}$/";

if (preg_match($regexp, $email)) {
    echo "Email address is valid.";
} else {
    echo "Email address is <u>not</u> valid.";
}
}
?>





<html>
   <body>
   
      <form action = "<?php $_PHP_SELF ?>" method = "GET">
         Email: <input type = "text" name = "mail" />
         
         <input type = "submit" />
      </form>
   
   </body>
</html>