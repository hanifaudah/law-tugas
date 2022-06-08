from fastapi import Depends, FastAPI
from os import getenv
from dotenv import load_dotenv
# db
from sqlalchemy.orm import Session

from db import crud, models, schemas
from db.database import SessionLocal, engine

load_dotenv()

models.Base.metadata.create_all(bind=engine)

app = FastAPI(root_path=getenv("ROOT_PATH"))

# setup db
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/")
def update_mahasiswa(mahasiswa: schemas.MahasiswaCreate, db: Session = Depends(get_db)):
    try:
        crud.update_mahasiswa(db=db, mahasiswa=mahasiswa)
        return { "status": "OK" }
    except Exception as e:
        return e