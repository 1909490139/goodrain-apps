FROM openjdk:8-jdk

# LABEL maintainer="Roy Kim <roy.kim@navercorp.com>"

# ARG PINPOINT_VERSION=${PINPOINT_VERSION:-2.1.0}

# ARG INSTALL_URL=https://github.com/naver/pinpoint/releases/download/v${PINPOINT_VERSION}/pinpoint-collector-boot-${PINPOINT_VERSION}.jar

ENV JAVA_OPTS="-Dspring.profiles.active=release"
ENV SPRING_PROFILES=release
ENV CLUSTER_ENABLE=true
ENV LOGGING_LEVEL_ROOT=INFO
ENV FLINK_CLUSTER_ENABLE=false


RUN mkdir -p /pinpoint/config \
    && mkdir -p /pinpoint/scripts

COPY /build/config/pinpoint-collector.properties /pinpoint/config/
COPY /build/scripts/start-collector.sh /pinpoint/scripts/
#temporary line for local test
COPY pinpoint-collector-boot-2.1.0.jar /pinpoint/pinpoint-collector-boot.jar

COPY sources.list /etc/apt/sources.list
COPY /build/scripts/rainbondenv /pinpoint/scripts/rainbondenv

# RUN apk --no-cache add curl net-tools \
RUN apt-get update && apt-get -y install net-tools dnsutils telnet ncat \
    && chmod a+x /pinpoint/scripts/start-collector.sh \
    && chmod a+x /pinpoint/scripts/rainbondenv \
    && chmod a+x /pinpoint/config/pinpoint-collector.properties
    # && curl -SL ${INSTALL_URL} -o /pinpoint/pinpoint-collector-boot.jar

EXPOSE 9991 9992 9993 9994 9995 9996

# ENTRYPOINT ["sh", "/pinpoint/scripts/start-collector.sh"]
CMD . /pinpoint/scripts/rainbondenv
