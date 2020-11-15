from django.db import models

# Create your models here.

class links(models.Model):
	uploaded_link = models.CharField(max_length=255)
	generated_link = models.CharField(max_length=255)

	def __str__(self):
		return self.uploaded_link
