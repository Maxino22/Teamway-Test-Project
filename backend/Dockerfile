FROM python:3.11.0a3-alpine3.15

WORKDIR  /app

# add app dependancies
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .
RUN python manage.py migrate
RUN python manage.py collectstatic --noinput
EXPOSE 80

CMD ["gunicorn", "personality_test.wsgi:application" ,"--bind" ,"0.0.0.0:80"]
