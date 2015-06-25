__author__ = 'ashim888'
from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.post_list),
    url(r'^index', views.post_list),
    url(r'^post_list', views.post_list),
    url(r'^about', views.about_me),
    url(r'^contact', views.contact_me),
    url(r'^test', views.test),
    url(r'^post/(?P<pk>[0-9]+)/$', views.post_detail),
    url(r'^tag/(?P<tag>\w*)$', views.tag_page),
]

# from django.conf.urls import include, url
# from . import views
#
# urlpatterns = [
#     url(r'^$', views.post_list),
#     url(r'^post/(?P<pk>[0-9]+)/$', views.post_detail),
# ]