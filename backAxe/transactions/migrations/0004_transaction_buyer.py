# Generated by Django 4.0.3 on 2022-04-03 21:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('transactions', '0003_remove_transaction_buyer'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='buyer',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='buyer', to=settings.AUTH_USER_MODEL),
        ),
    ]
