#!/bin/bash


Hello () 
{
   echo "Hello World $1"
	
   hello2
return 10
}
hello2 ()
{	
	echo "another function"
}
Hello pooja
ret=$?
echo "the number is  = $ret"
