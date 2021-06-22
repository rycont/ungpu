#!/bin/sh
# apt install -y mysql-server mysql-client
# apt install -y libmysqlclient-dev
# curl -sL https://deb.nodesource.com/setup_14.x | bash
# apt install -y nodejs-dev

service mysql start
mysql -u root < db.sql