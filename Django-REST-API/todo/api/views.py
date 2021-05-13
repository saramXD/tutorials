from django.shortcuts import render
from django.http import JsonResponse            #similar to HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TaskSerializer

from .models import Task


@api_view(['GET'])  # decorator
def apiOverview(request): 
    api_urls = {
        'List': '/task-list/',
        'Detail View': '/task-detail/<str:pk>/',
        'Create': '/task-create/',
        'Update': '/task-update/<str:pk>/',
        'Delete': '/task-delete/<str:pk>/',
    }

    return Response(api_urls) #similar to HttpResponse but passes unrendered data
                              #https://www.django-rest-framework.org/api-guide/responses/#response

@api_view(['GET'])
def taskList(request):
    tasks = Task.objects.all()  # Model.objects: db -> object           ;;        .all(): all of objects oriented from db
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)        #returns serialized JSON data
                                            #https://www.django-rest-framework.org/api-guide/serializers/#serializing-objects

@api_view(['GET'])
def taskDetail(request, pk):
    tasks = Task.objects.get(id=pk)                     #each db object provided "primary key" automatically
    serializer = TaskSerializer(tasks, many=False)      #https://docs.djangoproject.com/en/3.1/topics/db/models/#automatic-primary-key-fields
    return Response(serializer.data)


@api_view(['POST'])
def taskCreate(request):
    serializer = TaskSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()           #saving deserialized data

    return Response(serializer.data)


@api_view(['POST'])
def taskUpdate(request, pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerializer(instance=task, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def taskDelete(request, pk):
    task = Task.objects.get(id=pk)
    task.delete()                       #https://docs.djangoproject.com/en/3.1/ref/models/querysets/#delete

    return Response('Item deleted!')
