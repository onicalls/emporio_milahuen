# Instalación del entorno

Para utilizar este proyecto debes tener instalada la versión
de Python 3.8.5 o superior. Para instalar las dependencias
necesarias, ejecuta el siguiente comando:

```bash
pip install -r requirements.txt
```

Para ejecutar el proyecto, ejecuta el siguiente comando:

```bash
python manage.py runserver
```

# Control una aplicación
Para crear una aplicación, ejecuta el siguiente comando:

```bash
python manage.py startapp api
```

Esto genera una carpeta con el nombre de la aplicación, en este caso `emporio_milahuen`.

A continuación, debes agregar la aplicación al archivo `settings.py` en la lista `INSTALLED_APPS`.

```python
INSTALLED_APPS = [
    "...",
    'api',
]
```

Ahora debes crear un modelo en el archivo `models.py` de la aplicación.

```python
from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    precio = models.IntegerField()
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre
```
Las migraciones son necesarias para crear o modificar la base de datos.

Para crear una migración, ejecuta el siguiente comando:


```bash
python manage.py makemigrations
```

Para hacer una migración, ejecuta el siguiente comando:

```bash
python manage.py migrate
```

Existen distintos tipos de datos que Django permite utilizar en los modelos. Para más información, visita la [documentación oficial](https://docs.djangoproject.com/es/5.0/ref/models/fields/#field-types).

Para crear llaves foráneas, debes utilizar el campo `ForeignKey`. Esto solo sirve para relaciones uno a muchos.

```python
from django.db import models

class Categoria(models.Model):
    nombre = models.CharField(max_length=100)
    
class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    precio = models.IntegerField()
    descripcion = models.TextField()
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
```

Es importante que al crear una llave foránea, especifiques el comportamiento que tendrá la base de datos al eliminar el registro padre. En este caso, se eliminarán todos los productos asociados a una categoría si esta es eliminada.
Los `on_delete` disponibles son: CASCADE, PROTECT, SET_NULL, SET_DEFAULT, SET y DO_NOTHING.

Para relaciones Muchos a Muchos, debes utilizar el campo `ManyToManyField`.

```python
from django.db import models

class Categoria(models.Model):
    nombre = models.CharField(max_length=100)

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    precio = models.IntegerField()
    descripcion = models.TextField()
    categorias = models.ManyToManyField(Categoria)
```

Para relaciones uno a uno, debes utilizar el campo `OneToOneField`.

```python
from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    precio = models.IntegerField()
    descripcion = models.TextField()

class DetalleProducto(models.Model):
    producto = models.OneToOneField(Producto, on_delete=models.CASCADE)
    stock = models.IntegerField()
```
