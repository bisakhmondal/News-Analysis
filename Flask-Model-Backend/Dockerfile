FROM python:3.7-buster

LABEL maintainer="Bisakh Mondal <bisakhmondal00@gmail.com>"

RUN apt-get update && apt-get install -y apache2
RUN service apache2 start

COPY ./requirements.txt /requirements.txt
RUN pip install -r requirements.txt

COPY . /backend
WORKDIR /backend/

EXPOSE 5000

CMD ["gunicorn","--bind","0.0.0.0:5000", "wsgi:app"]