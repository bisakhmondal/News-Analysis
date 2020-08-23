# python buster image consumes hell lot of storage.. :-( ALPINE IS :)
FROM python:3.7-alpine3.8

LABEL maintainer="Bisakh Mondal <bisakhmondal00@gmail.com>"

RUN apk add openrc apache2 --no-cache
#RUN rc-service apache2 restart
RUN pip install --upgrade pip

RUN apk add --no-cache --virtual=.build-deps \
        bash \
        cmake \
        curl \
        freetype-dev \
        g++ \
        libjpeg-turbo-dev \
        libpng-dev \
        linux-headers \
        make \
        musl-dev \
        openblas-dev \
        openjdk8 \
        patch \
        perl \
        python3-dev \
        py-numpy-dev \
        rsync \
        sed \
        swig \
        zip \
    && cd /tmp \
    && pip3 install --no-cache-dir wheel \
    && $(cd /usr/bin && ln -s python3 python)

COPY ./requirements.txt /requirements.txt
RUN pip install -r requirements.txt

COPY . /backend
WORKDIR /backend/

EXPOSE 5000

CMD ["gunicorn","--bind","0.0.0.0:5000", "wsgi:app"]