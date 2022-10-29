from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Question
from .serializers import QuestionSerializers

# Create your views here.


@api_view()
def questions_list(request):
    queryset = Question.objects.all()
    serializer = QuestionSerializers(queryset, many=True)
    return Response(serializer.data)


@api_view()
def question_detail(request, id):
    question = get_object_or_404(Question, pk=id)
    serializer = QuestionSerializers(question)

    return Response(serializer.data)
