from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', views.tutorial_list),
    path('api/tutorials/<str:pk>/',views.tutorial_detail),
    path('api/tutorials/published/', views.tutorial_list_published),
]
