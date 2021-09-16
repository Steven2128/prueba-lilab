#Django
from django.shortcuts import render
#Rest_framework
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from rest_framework import status
#Models
from .models import Solicitud
#Serializers
from .serializers import *

class SolicitudListado(APIView):
    """Vista listado de solicitudes"""
    def get(self, request, *args, **kwargs):
        solicitud = Solicitud.objects.all()
        serializer = SolicitudSerializer(solicitud, many=True)
        return Response(serializer.data)


class SolicitudCrear(APIView):
    """Vista crear solicitudes"""
    def post(self, request, *args, **kwargs):
        serializer = SolicitudSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)