#!/bin/bash

# HBASE=/home/pinpoint/hbase
# ZOO=/home/pinpoint/zookeeper

# if [ "`ls -A ${HBASE}`" = "" ]; then
#     echo "hbase data is empty"
#     if [ "`ls -A ${ZOO}`" = "" ]; then
#     # echo "zoo data is empty"
#     # echo "Uninitialized, start initializing ！！！～～～"
#     # /opt/hbase-1.2.6/bin/start-hbase.sh
#     # sleep 10
#     # echo "start initializing create job"
#     # /opt/hbase-1.2.6/bin/hbase shell /opt/create-hbase.hbase
#     # echo "stop initializing create job"
#     # /opt/hbase-1.2.6/bin/stop-hbase.sh
#     # sleep 10
#     echo "start hbase-master!!!~~~"
#     /opt/hbase-1.2.6/bin/hbase master start
#     fi
# else
#     echo "Already initialized,Is starting！！！！～～～"
#     /opt/hbase-1.2.6/bin/hbase master start
# fi
sh /opt/tomcat-web/bin/startup.sh
sh /opt/tomcat-collector/bin/startup.sh
/opt/hbase-1.2.6/bin/hbase master start
