# Generated by Django 5.0.1 on 2024-01-14 14:35

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('places', '0004_place_reviews'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='place',
            name='likes',
            field=models.ManyToManyField(blank=True, related_name='places_liked', to=settings.AUTH_USER_MODEL),
        ),
    ]
