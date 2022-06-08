from sqlalchemy.orm import Session

from . import models, schemas

def get_mahasiswa_by_npm(db: Session, npm: str):
    return db.query(models.Mahasiswa).filter(models.Mahasiswa.npm == npm).first()

def create_mahasiswa(db: Session, mahasiswa: schemas.MahasiswaCreate):
    db_mahasiswa = models.Mahasiswa(npm=mahasiswa.npm, nama=mahasiswa.nama)
    db.add(db_mahasiswa)
    db.commit()
    db.refresh(db_mahasiswa)
    return db_mahasiswa

def update_mahasiswa(db: Session, mahasiswa: schemas.MahasiswaCreate):
    db_mahasiswa = get_mahasiswa_by_npm(db, npm=mahasiswa.npm)
    if not db_mahasiswa:
        return create_mahasiswa(db=db, mahasiswa=mahasiswa)
    else:
        db_mahasiswa.npm = mahasiswa.npm
        db_mahasiswa.nama = mahasiswa.nama
        db.commit()
        db.refresh(db_mahasiswa)
        return db_mahasiswa

