from django.shortcuts import render,redirect
from .models import links
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.urls import resolve
# Create your views here.


def upload_link(request):
	if request.GET:
		c = links.objects.all().count()+1
		link = request.GET.get('link')
		links(None,link,str(c)).save()
		current_url = request.get_host()
		print(current_url)
		data = {'generated_link': current_url+'/shortened/'+str(c)}
		return JsonResponse(data)

	return render(request,'index.html')


def get_url(request,idi):
	info = links.objects.get(generated_link=idi)
	return redirect(info.uploaded_link)