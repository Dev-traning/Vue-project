FROM python:3.9.18-alpine3.18
WORKDIR /home/dimpy/Documents/Docker/Hello-world
RUN python3 -m venv venv
RUN pip3 install flask
CMD [ "flask","run" ]