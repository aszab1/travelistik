# Generated by Django 5.0.1 on 2024-01-20 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boards', '0002_board_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='board',
            name='image',
            field=models.URLField(max_length=2000),
        ),
    ]