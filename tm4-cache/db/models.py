from sqlalchemy import Column, Integer, String

from .database import Base

class Mahasiswa(Base):
    __tablename__ = "mahasiswa"

    id = Column(Integer, primary_key=True, index=True)
    npm = Column(String, unique=True, index=True)
    nama = Column(String)
