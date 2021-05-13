# Serializer
# https://www.django-rest-framework.org/api-guide/serializers/
# model instance -> python data (can be easily converted in to JSON)

from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):   #similar with creating model
    class Meta:            
        model = Task                 #Model metadata: “anything that’s not a field”
        fields = '__all__'
