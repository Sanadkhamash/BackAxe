# Generated by Django 4.0.3 on 2022-03-20 10:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('users', '0002_rename_product_id_reports_product_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reports',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='users.userinfo'),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL),
        ),
    ]