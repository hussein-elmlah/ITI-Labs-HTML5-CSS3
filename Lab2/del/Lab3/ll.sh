#!/usr/bin/bash
# 1. Write a script called mycase, using the case utility to checks the type of character
# entered by a user:
# a. Upper Case.
# b. Lower Case.
# c. Number.
# d. Nothing.
echo Enter Input :
read var
case $var in
[a-z] ) echo "lower case" ;;
[A-Z] ) echo "upper case" ;;
[0-9] ) echo "integer" ;;
*) echo "nothing"
esac
