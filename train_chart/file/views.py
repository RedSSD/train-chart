from rest_framework import generics
from rest_framework.response import Response
from .serializers import FileUploadSerializer

import openpyxl
from openpyxl.utils.exceptions import InvalidFileException

from .parser import parse_excel


class FileUploadView(generics.CreateAPIView):
    
    serializer_class = FileUploadSerializer

    def post(self, request, *args, **kwargs):
        # TODO add validation
        try:
            excel_file = request.FILES["excel_file"]
        except Exception as e:
            return Response(f"An unexpected error occurred: {e}")

        response = parse_excel(excel_file)
        return Response(response)




