"""pesmarica2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers
from songs import views


# https://www.django-rest-framework.org/tutorial/quickstart/#urls
#
# Because we're using viewsets instead of views, we can automatically generate
# the URL conf for our API, by simply registering the viewsets with a router class.
router = routers.DefaultRouter()
router.register(r'songs', views.SongViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    re_path(r'^api/auth/', include('djoser.urls.base')),
    re_path(r'^api/auth/', include('djoser.urls.authtoken')),
    re_path(r"^api/auth/", include("djoser.urls.jwt")),
]
