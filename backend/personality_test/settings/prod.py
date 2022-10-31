from .common import *

DEBUG = False
SECRET_KEY = os.getenv('SECRET_KEY')

ALLOWED_HOSTS = [
    "api.personality.maxino.xyz"
]


DATABASES = {
    'default': {
        'ENGINE': os.getenv('ENGINE'),
        'CLIENT': {
            "name": os.getenv('DB_NAME'),
            "host": os.getenv('HOST'),
            "username": os.getenv('USERNAME'),
            "password": os.getenv('PASSWORD'),
            "authMechanism": os.getenv('AUTHMECHANISM'),
        }
    }
}


CORS_ALLOWED_ORIGINS = [
    "https://personality.maxino.xyz"
]
