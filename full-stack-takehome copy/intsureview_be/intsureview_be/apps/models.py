from django.db import models

class FormEntry(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    favorite_animal = models.CharField(max_length=255)
    favorite_movies = models.TextField()
    favorite_ice_cream_flavor = models.CharField(max_length=255)

    def _str_(self):
        return self.title