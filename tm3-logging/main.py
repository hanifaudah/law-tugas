from fastapi import FastAPI
from logstash import logger

app = FastAPI()

@app.get("/")
def get(q: str):
  params = { "q": q }
  logger.info(params)
  return params