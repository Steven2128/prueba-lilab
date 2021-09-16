#Django
from django.db import models
from django.core.validators import MinValueValidator

class Solicitud(models.Model):
    """Modelo solicitud"""
    nombres = models.CharField(max_length=250)
    apellidos = models.CharField(max_length=250)
    monto_total = models.IntegerField(validators=[MinValueValidator(0)])
    ESTADOS = [
        ('AP', 'APROBADO'),
        ('DN', 'DENEGADO'),
        ('ET', 'EN TRAMITE'),
    ]
    estado = models.CharField(max_length=10, choices=ESTADOS, default='ET')

    INDICADORES = [
        ('B', 'Bueno'),
        ('R', 'Regular'),
        ('M', 'Malo'),
    ]
    indicador_sentinel = models.CharField(max_length=2, choices=INDICADORES)

    def __str__(self):
        return self.nombres+' '+self.apellidos