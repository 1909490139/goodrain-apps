# pinpoint-agent
* 此dockerfile把官方的 agent 和 testapp 打包到了一起
## 连接collector
* 只需修改更改环境变量的 **COLLECTOR_IP** ip即可
## 启动
```shell
docker run -p 8000:8080 -e COLLECTOR_IP=127.0.0.1 -d registry.cn-hangzhou.aliyuncs.com/zqqq/pinpoint-agent
```