# Generated by Django 4.0.3 on 2022-04-07 09:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinfo',
            name='first_name',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='last_name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]