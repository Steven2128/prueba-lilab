#Django
from django.urls import path, include
#Views
from .views import *

urlpatterns = [
    path('solicitudes/listado/', SolicitudListado.as_view()),
    path('solicitudes/crear/', SolicitudCrear.as_view())
]
