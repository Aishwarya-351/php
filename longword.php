<?php
$string = "Where did the big aabbccdd Elephant go?";
$words  = explode(' ', $string);

$longestWordLength = 0;
$longestWord = '';

foreach ($words as $word) 
{
   if (strlen($word) > $longestWordLength)
	{
      $longestWordLength = strlen($word);
      $longestWord = $word;
	}
	
	if(strlen($word) == strlen($longestWordLength))
	{
		$longestWordLength= explode(' ', trim($string));
		$longestWordLength= substr($word,1);
	
	}
}

echo $longestWord;
// Outputs: "Elephant"
?>