# Generated by Django 4.0.3 on 2022-03-20 11:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
        ('users', '0004_reports_reported_by_alter_reports_user_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Reports',
            new_name='Report',
        ),
    ]
