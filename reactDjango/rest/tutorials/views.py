from django.shortcuts import render

# Create your views here.

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from tutorials.models import Tutorial
from tutorials.serializers import TutorialSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def tutorial_list(request):
    # GET list of tutorials, POST a new tutorial, DELETE all tutorials
    
    ### [title받아서 GET]               *serialize: model instance, queryset(db object list) -> python object(ez2b json)
    if request.method == 'GET':
        tutorials = Tutorial.objects.all() #Tutorial model "db data" -> queryset("db object")

        title = request.GET.get('title', None) #title = request object에서 GET하고 싶은 title
        if title is not None:
            tutorials = tutorials.filter(title__icontains=title) #tutorials = title을 포함하는 db object

        tutorials_serializer = TutorialSerializer(tutorials, many=True) #db object -> python object
        return JsonResponse(tutorials_serializer.data, safe=False) #serialize된 python object를 jsonresponse로 보내기
        # 'safe=False' for objects serialization

    ### [POST]
    elif request.method == 'POST':
        tutorial_data = JSONParser().parse(request) #request object -> (queryset)db object  **보충필요
        tutorial_serializer = TutorialSerializer(data=tutorial_data) #db object -> python object
        if tutorial_serializer.is_valid():  #valid하면 저장
            tutorial_serializer.save()
            return JsonResponse(tutorial_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(tutorial_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    ### [DELETE all data]
    elif request.method == 'DELETE':
        count = Tutorial.objects.all().delete()
        return JsonResponse({'message': '{} Tutorials were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
    #보충필요

@api_view(['GET', 'PUT', 'DELETE'])
def tutorial_detail(request, pk):
    # find tutorial by pk (id)
    try:
        tutorial = Tutorial.objects.get(pk=pk) #특정 pk가진 single db object
    except Tutorial.DoesNotExist:
        return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
    ### [single GET]
    if request.method == 'GET': 
        tutorial_serializer = TutorialSerializer(tutorial) 
        return JsonResponse(tutorial_serializer.data)     

    ### [update]        
    elif request.method == 'PUT': 
        tutorial_data = JSONParser().parse(request) #request object -> db object
        tutorial_serializer = TutorialSerializer(tutorial, data=tutorial_data) # param으로 원래 data가 들어가면 update, 없으면 create
        if tutorial_serializer.is_valid():  #valid하면 save
            tutorial_serializer.save() 
            return JsonResponse(tutorial_serializer.data) 
        return JsonResponse(tutorial_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
    ### [single delete]
    elif request.method == 'DELETE': 
        tutorial.delete() 
        return JsonResponse({'message': 'Tutorial was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def tutorial_list_published(request):
    tutorials = Tutorial.objects.filter(published=True)
        
    if request.method == 'GET': 
        tutorials_serializer = TutorialSerializer(tutorials, many=True)
        return JsonResponse(tutorials_serializer.data, safe=False)
