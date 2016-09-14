<?php   
     //create curl resource(initialize)
        $ch = curl_init();
       // set url (Set Option)
       curl_setopt($ch, CURLOPT_URL, "example.com"); 
      //return the transfer as a string
		(Set Option)
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
      // $output contains the output string(Execute)
         $output = curl_exec($ch); 
         // close curl resource to free up system resources  
        curl_close($ch);
       ?>
