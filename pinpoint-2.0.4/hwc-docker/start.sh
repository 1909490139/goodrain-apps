#!/bin/bash

INIT="/home/pinpoint/Initialize"

if [ "`ls -A $INIT`" = "" ]; then
    echo " start hbase Initialize--------------------------------------"
    mv /opt/create-hbase.hbase /home/pinpoint/Initialize
    /opt/hbase-1.2.6/bin/start-hbase.sh && \
    /opt/hbase-1.2.6/bin/hbase shell /home/pinpoint/Initialize/create-hbase.hbase && \
    /opt/hbase-1.2.6/bin/stop-hbase.sh
    echo "Hbase in the start------------------------------------"
    sh /opt/tomcat-web/bin/startup.sh
    sh /opt/tomcat-collector/bin/startup.sh
    /opt/hbase-1.2.6/bin/hbase master start
    
else
    echo "Already initialized, Hbase in the start------------------------------------"
    sh /opt/tomcat-web/bin/startup.sh
    sh /opt/tomcat-collector/bin/startup.sh
    /opt/hbase-1.2.6/bin/hbase master start
fi
