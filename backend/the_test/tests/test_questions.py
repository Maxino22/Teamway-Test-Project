from rest_framework import status
import pytest


@pytest.mark.django_db
class TestQuestionEndpoint:
    def test_http_methods_allowed(self, api_client):

        response = api_client.post('/questions/', {'question': 'a'})

        assert response.status_code == status.HTTP_405_METHOD_NOT_ALLOWED

    def test_fetching_questions(self, api_client):
        response = api_client.get('/questions/')

        assert response.status_code == status.HTTP_200_OK
