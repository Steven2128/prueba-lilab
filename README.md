# Prueba Técnica
Integrar Django y Angular creando una API REST y ejecutando ambos servidores por separado

# Project Initialization
1. Crea un entorno virtual usando virtualenv
	```
	pip install virtualenv

2. Activate virtualenv using
	```
	env\script\activate
	```

3. Run migrations
	```
	python manage.py migrate
	python manage.py createsuperuser
	```
  
4. Start Django project
	```
	python creditos\manage.py runserver
	```

5. Run angular server
	```
	ng serve --open
	```
5. Run angular server
	```
	Dirigete a http://localhost:4200/
	```
