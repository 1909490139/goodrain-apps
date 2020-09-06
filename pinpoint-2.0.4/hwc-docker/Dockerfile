FROM java:8-jdk

COPY . /opt/
WORKDIR /opt
#初始化pinpoint数据
RUN tar xfvz hbase-1.2.6-bin.tar.gz && \
    chmod +x /opt/start.sh && \
    mv /opt/hbase-site.xml /opt/hbase-1.2.6/conf/ && \
    /opt/hbase-1.2.6/bin/start-hbase.sh && \
    sleep 10 && \
    /opt/hbase-1.2.6/bin/hbase shell /opt/create-hbase.hbase && \
    /opt/hbase-1.2.6/bin/stop-hbase.sh

#解决 apt-get update 404问题
RUN echo "deb [check-valid-until=no] http://cdn-fastly.deb.debian.org/debian jessie main" > /etc/apt/sources.list.d/jessie.list && \
    echo "deb [check-valid-until=no] http://archive.debian.org/debian jessie-backports main" > /etc/apt/sources.list.d/jessie-backports.list && \
    sed -i '/deb http:\/\/deb.debian.org\/debian jessie-updates main/d' /etc/apt/sources.list && \
    apt-get -o Acquire::Check-Valid-Until=false update && \
    apt-get -y install net-tools

EXPOSE 2180 16010 60000 60020 8080 9991 9992 9993 9994 9995 9996

VOLUME ["/home/pinpoint/hbase", "/home/pinpoint/zookeeper"]

CMD sh start.sh