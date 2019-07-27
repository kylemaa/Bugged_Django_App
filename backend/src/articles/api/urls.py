from django.urls import path
from .views import ArticleViewSet
from rest_framework.routers import DefaultRouter
from rest_framework import viewsets

# urlpatterns = [
#     path('', ArticleListView.as_view()),
#     path('<pk>', ArticleDetailView.as_view())
# ]

router = DefaultRouter()
router.register(r'', ArticleViewSet, basename='articles')
urlpatterns = router.urls
