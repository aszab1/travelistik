from django.db import models

# Create your models here.
class Place(models.Model):
  name = models.CharField(max_length=255)
  description = models.TextField(max_length=2000)
  categories = models.ManyToManyField(
    to='categories.Category',
    related_name='places'
  )
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='owned_places',
    null=True
  )

  def __str__(self):
    return f'{self.name} {self.categories}'
  