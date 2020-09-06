FROM tomcat:8-jre8
ENV SPRING_PROFILES=release

ENV COLLECTOR_IP=127.0.0.1
ENV PROFILER_TRANSPORT_AGENT_COLLECTOR_PORT=9991
ENV PROFILER_TRANSPORT_METADATA_COLLECTOR_PORT=9991
ENV PROFILER_TRANSPORT_STAT_COLLECTOR_PORT=9992
ENV PROFILER_TRANSPORT_SPAN_COLLECTOR_PORT=9993
ENV PROFILER_SAMPLING_RATE=1
ENV DEBUG_LEVEL=INFO
ENV PROFILER_TRANSPORT_MODULE=GRPC

#1.8.5
ENV COLLECTOR_TCP_PORT=9994
ENV COLLECTOR_STAT_PORT=9995
ENV COLLECTOR_SPAN_PORT=9996

ENV JAVA_OPTS="-javaagent:/pinpoint-agent/pinpoint-bootstrap-2.0.3.jar -Dpinpoint.agentId=test-zq -Dpinpoint.applicationName=zq-test -Dpinpoint.profiler.profiles.active=release"
WORKDIR /
COPY pinpoint-quickstart-testapp.war /quickstart.war

RUN rm -rf /usr/local/tomcat/webapps \
    && mkdir -p /usr/local/tomcat/webapps \
    && unzip quickstart.war -d /usr/local/tomcat/webapps/ROOT \
    && rm -rf quickstart.war

# ARG PINPOINT_VERSION=${PINPOINT_VERSION:-2.0.3}
# ARG INSTALL_URL=https://github.com/naver/pinpoint/releases/download/v2.0.3/pinpoint-agent-2.0.3.tar.gz

COPY configure-agent.sh /usr/local/bin/
COPY pinpoint-agent-2.0.3.tar.gz /pinpoint-agent.tar.gz
# RUN apt-get update \
    # && apt-get -y install curl \
RUN chmod a+x /usr/local/bin/configure-agent.sh \
    && mkdir -p /pinpoint-agent \
    && chmod -R o+x /pinpoint-agent \
    # && curl -SL ${INSTALL_URL} -o pinpoint-agent.tar.gz \
    && gunzip pinpoint-agent.tar.gz \
    && tar -xf pinpoint-agent.tar --strip 1 -C /pinpoint-agent \
    && rm pinpoint-agent.tar 

COPY start.sh /opt/start.sh
RUN chmod +x /opt/start.sh

VOLUME ["/pinpoint-agent"]

CMD sh /opt/start.sh
