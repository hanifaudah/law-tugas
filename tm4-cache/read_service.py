from fastapi import Depends, FastAPI, HTTPException
from os import getenv
from dotenv import load_dotenv
# db
from sqlalchemy.orm import Session

from db import crud, models, schemas
from db.database import SessionLocal, engine
import uvicorn

load_dotenv()

models.Base.metadata.create_all(bind=engine)

app = FastAPI(root_path=getenv("READ_SERVICE_ROOT_PATH"))

# setup db
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/{npm}")
def read_mahasiswa_by_npm(npm:str, db: Session = Depends(get_db)):
    db_mahasiswa = crud.get_mahasiswa_by_npm(db, npm=npm)
    if not db_mahasiswa:
        raise HTTPException(status_code=400, detail="Mahasiswa not found")
    return { "status": "OK", "npm": db_mahasiswa.npm, "nama": db_mahasiswa.nama }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3005)