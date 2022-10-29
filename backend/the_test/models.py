from django.db import models

# Create your models here.


class Question(models.Model):
    question = models.CharField(max_length=255)
    intr = models.CharField(max_length=255)
    extr = models.CharField(max_length=255)
    ambi = models.CharField(max_length=255)

    def __str__(self):
        return self.question
