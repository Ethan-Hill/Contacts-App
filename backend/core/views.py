from rest_framework import viewsets
from .serializers import ContactSerializer
from .models import Contact

# Create your views here.

class ContactViewSet(viewsets.ModelViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()