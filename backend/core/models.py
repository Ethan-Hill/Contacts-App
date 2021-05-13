from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField(max_length = 254, unique=True)
    phone_number = PhoneNumberField(unique=True)