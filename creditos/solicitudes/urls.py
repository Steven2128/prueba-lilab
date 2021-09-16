#Django
from django.urls import path, include
#Views
from .views import *

urlpatterns = [
    path('solicitudes/listado/en-tramite/', SolicitudListadoET.as_view()),
    path('solicitudes/listado/aprobados/', SolicitudListadoAP.as_view()),
    path('solicitudes/listado/denegados/', SolicitudListadoDN.as_view()),
    path('solicitudes/crear/', SolicitudCrear.as_view()),
    path('solicitudes/aprobar/<int:pk>', SolicitudApobar.as_view()),
    path('solicitudes/denegar/<int:pk>', SolicitudDenegar.as_view()),
]
