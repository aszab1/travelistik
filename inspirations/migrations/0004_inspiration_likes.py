# Generated by Django 5.0.1 on 2024-01-12 23:13

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inspirations', '0003_inspiration_owner'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='inspiration',
            name='likes',
            field=models.ManyToManyField(related_name='inspirations_liked', to=settings.AUTH_USER_MODEL),
        ),
    ]
