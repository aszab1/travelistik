# Generated by Django 5.0.1 on 2024-01-12 14:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0001_initial'),
        ('places', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='place',
            name='categories',
            field=models.ManyToManyField(related_name='places', to='categories.category'),
        ),
    ]
