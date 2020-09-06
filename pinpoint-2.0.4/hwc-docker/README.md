# pinpoint
* 此dockerfile是把 **hbase** **web** **collector**做成了一个镜像。
## 介绍改动
### 1.hbase
* hbase-1.2.6-bin.tar.gz是官方下载的包。[hbase下载地址-版本1.2.6](http://archive.apache.org/dist/hbase/1.2.6/hbase-1.2.6-bin.tar.gz)
* hbase-site.xml 更改了hbase、zookeeper的持久化目录，更改了默认的hbase端口2181为2180
* create-hbase.hbase 是初始化pinpoint的数据
### 2.pinpoint-web
* 下载了官方的 web-2.0.4 的war包，解压到了 tomcat 的ROOT目录
* 修改了 tomcat-web/webapps/ROOT/WEb-INF/classes/profiles下一些所需的配置
### 3.pinpoint-collector
* 下载了官方的 collector-2.0.4 的war包，解压到了 tomcat 的ROOT目录
* 修改了 tomcat-collector/webapps/ROOT/WEb-INF/classes/profiles下一些所需的配置
### 4.构建镜像
```shell
docker build -t registry.cn-hangzhou.aliyuncs.com/zqqq/pinpoint-hwc:2.0.4 .
```
### 5.启动
```shell
#可使用我的镜像
docker run -p 2180:2180 -p 16010:16010 -p 60000:60000 -p 60020:60020 -p 8080:8080 -p 9991:9991 -p 9992:9992 -p 9993:9993 -p 9994:9994 -p 9995:9995 -p 9996:9996 --link zookeeper --link mysql --name hwc -d registry.cn-hangzhou.aliyuncs.com/zqqq/pinpoint-hwc:2.0.4
#9995 9996 是udp端口
```
* 需要依赖zookeeper:3.4 mysql:5.6
    > mysql 连接信息可参考web的配置文件

