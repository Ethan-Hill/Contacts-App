import json

from rest_framework import status
from rest_framework.test import APITestCase, APIRequestFactory

factory = APIRequestFactory()

class GatherTestCase(APITestCase):

	def test_gather(self):
		response = self.client.get("/api/contacts/")
		self.assertEqual(response.status_code, status.HTTP_200_OK)

class ManipulatingTestCase(APITestCase):

	def test_manipulating(self):
		userData = {"name": "test name", "email": "test@test.com", "phone_number": "+447543740147"}
		createResponse = self.client.post("/api/contacts/", userData)
		self.assertEqual(createResponse.status_code, status.HTTP_201_CREATED)

		id = createResponse.data["id"]

		newUserData = {"name": "test second", "email": "test@test2.com", "phone_number": "+447543740141"}
		updateResponse = self.client.patch(f"/api/contacts/{id}/", newUserData)
		self.assertEqual(updateResponse.status_code, status.HTTP_200_OK)

		deleteResponse = self.client.delete(f"/api/contacts/{id}/")
		self.assertEqual(deleteResponse.status_code, status.HTTP_204_NO_CONTENT)