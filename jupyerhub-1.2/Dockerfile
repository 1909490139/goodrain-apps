FROM jupyterhub/jupyterhub:latest
ADD jupyterhub_config.py /opt/

RUN pip install jupyterhub jupyterlab -i https://mirrors.aliyun.com/pypi/simple/ \
    && useradd -m admin \
    && echo "admin:admin" | chpasswd

EXPOSE 8000

VOLUME [ "/srv/jupyterhub", "/home" ]

CMD jupyterhub -f /opt/jupyterhub_config.py