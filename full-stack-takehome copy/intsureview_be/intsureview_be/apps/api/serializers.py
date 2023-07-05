from django.contrib.auth.models import User
from intsureview_be.apps.models import FormEntry
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["url", "username", "email", "groups"]


# class GroupSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Group
#         fields = ["url", "name"]

class FormEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = FormEntry
        fields = '__all__'