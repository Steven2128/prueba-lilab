#Rest_framework
from rest_framework import serializers
#Models
from .models import Solicitud


class SolicitudSerializer(serializers.ModelSerializer):
    """Modelo Solicitud serializado"""
    class Meta:
        model = Solicitud
        fields = '__all__'