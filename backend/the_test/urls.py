from django.views.generic import TemplateView
from django.urls import path
from . import views

urlpatterns = [
    path('', TemplateView.as_view(template_name='home.html')),
    path('questions/', views.questions_list),
    path('questions/<int:id>', views.question_detail)
]
