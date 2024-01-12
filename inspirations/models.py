from django.db import models

# Create your models here.
class Inspiration(models.Model):
  city = models.CharField(max_length=255)
  country = models.CharField(max_length=255)
  description = models.TextField(max_length=2000)
  image = models.URLField(max_length=2000)
  places = models.ManyToManyField(
    to='places.Place',
    related_name='inspirations'
  )

  def __str__(self):
    return f'{self.city} - {self.country} {self.description} {self.image}'
  

