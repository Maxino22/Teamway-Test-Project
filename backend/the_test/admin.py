from django.contrib import admin
from .models import Question

# Register your models here.


@admin.register(Question)
class QuestionsAdmin(admin.ModelAdmin):
    list_display = ['id', 'question']
    list_display_links = ['id', 'question']
