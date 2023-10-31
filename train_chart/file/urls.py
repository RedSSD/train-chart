from django.urls import path
from .views import FileUploadView

urlpatterns = [
    path('fileupload/', FileUploadView.as_view()),
]