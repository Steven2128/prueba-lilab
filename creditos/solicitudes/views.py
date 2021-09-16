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

class SolicitudListadoET(APIView):
    """Vista listado de solicitudes en tramite"""
    def get(self, request, *args, **kwargs):
        solicitud = Solicitud.objects.filter(estado="ET")
        serializer = SolicitudSerializer(solicitud, many=True)
        return Response(serializer.data)


class SolicitudListadoAP(APIView):
    """Vista listado de solicitudes aprobadas"""
    def get(self, request, *args, **kwargs):
        solicitud = Solicitud.objects.filter(estado="AP")
        serializer = SolicitudSerializer(solicitud, many=True)
        return Response(serializer.data)


class SolicitudListadoDN(APIView):
    """Vista listado de solicitudes denegadas"""
    def get(self, request, *args, **kwargs):
        solicitud = Solicitud.objects.filter(estado="DN")
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


class SolicitudApobar(APIView):
    """Vista aprobar solicitud"""
    def put(self, pk):
        solicitud = Solicitud.objects.get(id=pk)
        solicitud.estado = 'AP'
        solicitud.save()
        return Response("Aprobado")


class SolicitudDenegar(APIView):
    """Vista denegar solicitud"""
    def put(self, pk):
        solicitud = Solicitud.objects.get(id=pk)
        solicitud.estado = 'DN'
        solicitud.save()
        return Response("Denegado")