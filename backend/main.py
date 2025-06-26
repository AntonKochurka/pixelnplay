import os

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount(
    "/static/uploads",
    StaticFiles(directory=os.path.join("static", "uploads")),
    name="uploads"
)
