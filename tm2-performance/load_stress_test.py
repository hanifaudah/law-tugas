from locust import task, SequentialTaskSet, HttpUser
import random
import string

def get_random_npm():
  return "".join(random.choices(string.digits, k=10))

class CRUDTaskSet(SequentialTaskSet):
  def on_start(self):
    self.npm = get_random_npm()
    self.mahasiswa = {
      "npm": self.npm,
      "nama": "Budi Budiman",
      "alamat": "Jalan Kelapa"
    }
    return super().on_start()
  
  @task
  def post_mahasiswa(self):
    self.client.post("/mahasiswa/", json=self.mahasiswa)

  @task
  def get_mahasiswa(self):
    self.client.get(f"/mahasiswa/{self.npm}")
  
  @task
  def put_mahasiswa(self):
    new_mahasiswa = self.mahasiswa
    new_mahasiswa["nama"] = "New nama"
    self.client.put(f"/mahasiswa/{self.npm}", json=new_mahasiswa)

  @task
  def delete_mahasiswa(self):
    self.client.delete(f"/mahasiswa/{self.npm}")

class LoadTesting(HttpUser):
  tasks = [CRUDTaskSet]