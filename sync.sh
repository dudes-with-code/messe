#!/bin/sh

while true
do
#Backup db
docker exec db /usr/bin/mysqldump -u root --password=secure_password messe > backup.sql

#Restore to cdb
cat backup.sql | docker exec -i cdb /usr/bin/mysql -u root --password=secure_password company
echo "synced"
sleep "5"
done