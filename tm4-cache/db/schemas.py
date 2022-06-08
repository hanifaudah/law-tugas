from pydantic import BaseModel

class MahasiswaBase(BaseModel):
    npm: str
    nama: str

class MahasiswaCreate(MahasiswaBase):
    pass

class Mahasiswa(MahasiswaBase):
    id: int

    class Config:
        orm_mode = True
