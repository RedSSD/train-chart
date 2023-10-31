from rest_framework import serializers


# Serializers define the API representation.
class FileUploadSerializer(serializers.Serializer):
    excel_file = serializers.FileField()

    class Meta:
        fields = ['excel_file']