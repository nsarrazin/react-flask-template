FROM python:3.8-slim-buster

WORKDIR api/

COPY api/requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
ADD api/ .

EXPOSE 5000

CMD ["gunicorn", "-k eventlet", "-w 1", "-b 0.0.0.0:5000", "app:app"]