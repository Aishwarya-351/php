<?php
//session_start();
$name = "abc.txt";
if(!file_exists($name))
{
		$cnt=1;
		$f=fopen($name,"w");
		fwrite($f,$cnt);		
}
else
{
	$f=fopen($name,"r");
	$cnt = fread($f,filesize($name));
	$cnt++;
	fclose($f);
	$f=fopen($name,"w");
	fwrite($f,$cnt);
}
fclose($f);
echo 'Visit Count is :'.$cnt;
?>