# # from django.contrib.auth.models import User, Group
# # from intsureview_be.apps.api.serializers import FormEntrySerializer
# # from intsureview_be.apps.models import FormEntry
# # from rest_framework import viewsets, permissions, generics
# # # from intsureview_be.apps.api.serializers import UserSerializer, GroupSerializer


# # class UserViewSet(viewsets.ModelViewSet):
# #     """
# #     API endpoint that allows users to be viewed or edited.
# #     """

# #     queryset = User.objects.all().order_by("-date_joined")
# #     serializer_class = UserSerializer
# #     permission_classes = [permissions.IsAuthenticated]


# # class GroupViewSet(viewsets.ModelViewSet):
# #     """
# #     API endpoint that allows groups to be viewed or edited.
# #     """

# #     queryset = Group.objects.all()
# #     serializer_class = GroupSerializer
# #     permission_classes = [permissions.IsAuthenticated]


# # class FormEntryCreateView(generics.CreateAPIView):
# #     queryset = FormEntry.objects.all()
# #     serializer_class = FormEntrySerializer


# from django.contrib.auth.models import User
# from intsureview_be.apps.api.serializers import FormEntrySerializer
# from rest_framework import viewsets
# from rest_framework.views import APIView
# from rest_framework import permissions
# from rest_framework.response import Response
# from intsureview_be.apps.api.serializers import UserSerializer


# class UserViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """

#     queryset = User.objects.all().order_by("-date_joined")
#     serializer_class = UserSerializer
#     permission_classes = [permissions.IsAuthenticated]

# class FormDataView(APIView):
#     def post(self, request):
#         serializer = FormEntrySerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)


from rest_framework.views import APIView
from rest_framework.response import Response
from intsureview_be.apps.models import FormEntry
from .serializers import FormEntrySerializer

class FormDataView(APIView):
    #Post method that will respond with either a 201=success or 400=fail
    def post(self, request):
        serializer = FormEntrySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)