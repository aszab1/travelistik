from django.db import models

# Create your models here.
class Board(models.Model):
  city = models.CharField(max_length=255)
  country = models.CharField(max_length=255)
  description = models.TextField(max_length=2000)
  image = models.URLField(max_length=2000)
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='boards_owned',
    null=True
  )
  places = models.ManyToManyField(
    to='places.Place',
    related_name='boards'
  )
  
  def __str__(self):
    return f'{self.city} - {self.country}'