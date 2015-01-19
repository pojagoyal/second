#!/bin/bash

echo "enter the two numbers"
read a
read b
sum=`expr $a + $b`
mul=`expr $a \* $b`
subs=`expr $a - $b`
div=`expr $a / $b`
echo "the sum is : $sum"
echo "the multiplication of two numbers is : $mul"
echo "the substraction is : $subs"
echo "the div is : $div"

