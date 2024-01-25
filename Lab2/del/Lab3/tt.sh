#!/usr/bin/bash
echo enter your character :
read name
echo $name
logname=`grep -u $name /etc/passwd | cut -f1 -d:`
echo $logname
if [ -z $logname ]
then
        echo invalid logname
else
        home=`grep  $logname /etc/passwd | cut -f6 -d:`
        echo $home
        ls -l $home
        cp -r $home/* /tmp/dir
        echo $logname
        ps -u $logname
fi
