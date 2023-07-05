from django.contrib import admin
from django.urls import include, path
from intsureview_be.apps.api.views import FormDataView
from rest_framework import routers
from intsureview_be.apps.api import views

urlpatterns = [
    path("admin/", admin.site.urls),
]

router = routers.DefaultRouter()
# router.register(r"form", views.GroupViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path("", include(router.urls)),
    path("form/", FormDataView.as_view()),
]
