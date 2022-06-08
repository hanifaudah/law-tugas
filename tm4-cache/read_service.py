from fastapi import Depends, FastAPI, HTTPException
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

@app.get("/{npm}", response_model=schemas.Mahasiswa)
def read_mahasiswa_by_npm(npm:str, db: Session = Depends(get_db)):
    db_mahasiswa = crud.get_mahasiswa_by_npm(db, npm=npm)
    if not db_mahasiswa:
        raise HTTPException(status_code=400, detail="Mahasiswa not found")
    return db_mahasiswa