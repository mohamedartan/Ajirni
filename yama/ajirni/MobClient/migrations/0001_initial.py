# Generated by Django 2.2.2 on 2019-06-03 20:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Like',
            fields=[
                ('id', models.AutoField(auto_created=True,
                                        primary_key=True, serialize=False, verbose_name='ID')),
                ('item_id', models.IntegerField()),
                ('user_id', models.IntegerField()),
            ],
        ),
    ]
